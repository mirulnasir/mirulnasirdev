'use client'
import { Button } from '@/components/ui/button'
import useAsyncQueue from '@/hooks/use-async-queue'
import { cn } from '@/lib/utils'
import { error } from 'console'

import * as React from 'react'

type IndexProps = {

}
type QueueResult = {
    id: number
    status: 'pending' | 'done' | 'error'
    message: string

}


const Index = ({ }: IndexProps) => {
    // const [queue, setQueue] = React.useState<Queue>(new Queue({ autostart: true, }))
    // // const queueRef = React.useRef<Queue>(new Queue({
    // //     autostart: true,
    // // }))
    // console.log('random number', Math.floor(Math.random() * 10))
    const [listResult, setListResult] = React.useState<QueueResult[]>([])
    const { add, stats } = useAsyncQueue({
        concurrency: 5,
        done
    })
    async function done(task: any) {

        const result = await task.result as QueueResult
        console.log('done', result)
        setListResult((prevList) => {
            return prevList.map((item) => {
                if (item.id === result.id) {
                    return result
                }
                return item
            })
        })
    }

    const handleAddToQueue = () => {
        // setIsProcessing(true)
        const id = Math.floor(Math.random() * 1000)
        add({
            id: id,
            task: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        id % 2 === 0 ? resolve({
                            id: id,
                            message: `apple ${id}`,
                            status: 'done'

                        }) : resolve({
                            id: id,
                            message: `banana ${id}`,
                            status: 'error'

                        })

                    }, 3000)
                })
            }

        })
        setListResult([...listResult, {
            id: id,
            status: 'pending',
            message: 'fetching'
        }])

    }

    const handleRetry = (id: number) => {
        console.log('retry', id)
        const newNumber = Math.floor(Math.random() * 1000)
        add({
            id: id,
            task: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        newNumber % 2 === 0 ? resolve({
                            id: id,
                            message: `apple ${newNumber}`,
                            status: 'done'

                        }) : resolve({
                            id: id,
                            message: `banana ${newNumber}`,
                            status: 'error'

                        })

                    }, 3000)
                })
            }
        })
        setListResult((prevList) => {
            return prevList.map((item) => {
                if (item.id === id) {
                    return {
                        id: id,
                        status: 'pending',
                        message: 'fetching'
                    }
                }
                return item
            })
        })
    }
    const handleClearQueue = () => {
        setListResult([])
    }
    const disableContinue = listResult.some((item) => item.status === 'pending' || item.status === 'error') || stats.numInFlight > 0 || stats.numPending > 0 || listResult.length < 5
    return (
        <div className=' p-24 flex flex-col h-full gap-8'>
            <div className="text-2xl font-semibold">queue index</div>
            <div className="">{stats.numInFlight > 0 ? 'processing...' : 'idle'}</div>
            <div className="">{JSON.stringify(stats)}</div>
            <div className="flex gap-2">
                <Button onClick={() => handleAddToQueue()} >
                    add to queue
                </Button>
                <Button onClick={() => handleClearQueue()} disabled={listResult.length === 0}>
                    clear queue
                </Button>
            </div>
            <div className="divide-background divide-y border-background rounded-md overflow-y-auto">{
                listResult.map((result, index) => (
                    <div key={result.id} className={cn(
                        result.status === 'done' && 'bg-green-200',
                        result.status === 'error' && 'bg-red-200',
                        result.status === 'pending' && 'bg-gray-200',
                        "flex gap-2 py-2 px-4 items-center"
                    )
                    }>
                        <span className="w-12">{result.id}</span>
                        <span> {result.message}</span>
                        <span className='ml-auto'>
                            {result.status === 'error' && <Button onClick={() => handleRetry(result.id)} size="sm" variant={'secondary'}>
                                retry</Button>}  </span>
                    </div>
                ))

            }</div>
            <div className="mt-auto">
                <Button className='w-full' disabled={disableContinue} onClick={() => window.alert('🤡🤡🤡🤡🤡')}>
                    Continue
                </Button>
            </div>
        </div>
    )
}

export default Index