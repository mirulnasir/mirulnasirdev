'use client'
import { useState } from "react"
import { useCalculatedField } from "./core"
import { loggingPlugin } from "./_plugins/loggingPlugin"
import { roundingPlugin } from "./_plugins/roundingPlugin"

export const CalculatedField = () => {
    const [total, setTotal] = useState(0)
    const { add, subtract } = useCalculatedField({ plugins: [loggingPlugin, roundingPlugin] })

    const handleClickAdd = () => {
        setTotal(add(2, total))


    }
    const addResult = add(1.234, 2.345, 3.456); // 7.04 (rounded)
    const subtractResult = subtract(10.88, 3, 2); // 5
    return (
        <div className="">
            <div className="">
                <button onClick={handleClickAdd}>add</button>
            </div>
            <div className="">
                total: {total}
                <div className="">
                    {addResult}
                </div>
                <div className="">
                    {subtractResult}
                </div>
            </div>
        </div>
    )
}