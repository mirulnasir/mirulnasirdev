import React, { useCallback, useEffect } from "react"
import { useRef } from "react"

interface QueueStats {
    numPending: number
    numInFlight: number
    numDone: number
}
interface QueueTaskResult {
    id: any
    task(): Promise<any>
    result?: Promise<any>
    stats?: QueueStats
}
interface Queue {
    add: (task: QueueTaskResult) => void
    stats: QueueStats
}
interface QueueOptions {
    concurrency?: number
    done?: (result: QueueTaskResult) => void
    drain?: () => void
    inflight?: (task: QueueTaskResult) => void
}
function useAsyncQueue(opts: QueueOptions): Queue {
    const { done, drain, inflight } = opts
    let { concurrency = Infinity } = opts
    if (concurrency < 1) {
        concurrency = Infinity
    }

    const [stats, setStats] = React.useState<QueueStats>({
        numPending: 0,
        numInFlight: 0,
        numDone: 0
    })

    const drained = useRef(true)
    const inFlight = useRef([] as QueueTaskResult[])
    const pending = useRef([] as QueueTaskResult[])

    useEffect(() => {
        if (
            stats.numDone > 0 &&
            drain &&
            inFlight.current.length === 0 &&
            pending.current.length === 0 &&
            !drained.current
        ) {
            drained.current = true
            setTimeout(drain, 0)
            return
        }
        while (
            inFlight.current.length < concurrency &&
            pending.current.length > 0
        ) {
            drained.current = false
            const task = pending.current.shift()
            if (!task) continue
            inFlight.current.push(task)
            setStats((prev) => {
                return {
                    ...prev,
                    numPending: prev.numPending - 1,
                    numInFlight: prev.numInFlight + 1
                }
            })
            if (inflight) inflight({ ...task, stats })
            const result = task.task()
            result.then(() => {
                inFlight.current.pop()
                setStats((prev) => {
                    return {
                        ...prev,
                        numInFlight: prev.numInFlight - 1,
                        numDone: prev.numDone + 1
                    }
                })
                done && done({ ...task, result, stats })
            })
                .catch(() => {
                    inFlight.current.pop()
                    setStats((prev) => {
                        return {
                            ...prev,
                            numInFlight: prev.numInFlight - 1,
                            numDone: prev.numDone + 1
                        }
                    })
                    done && done({ ...task, result, stats })
                })

        }


    }, [
        concurrency,
        done,
        drain,
        inflight,
        stats,

    ])

    const add = useCallback((task: QueueTaskResult) => {
        pending.current.push(task)
        setStats((prev) => {
            return {
                ...prev,
                numPending: prev.numPending + 1
            }
        })
    }, []
    )
    const clear = useCallback(() => {
        inFlight.current = []
        pending.current = []
        setStats({
            numPending: 0,
            numInFlight: 0,
            numDone: 0
        })
    }, [])
    return { add, stats }


}
export default useAsyncQueue