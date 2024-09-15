"use client"

import { atom, useAtom, useAtomValue } from "jotai"
import { useMemo } from "react"
import { atomEffect } from 'jotai-effect'


const nameAtom = atom({
    firstName: "",
    lastName: ""
})
const ageAtom = atom(0)
const emailAtom = atom("")
const phoneAtom = atom({
    country: "",
    number: ""
})

const formAtom = atom({
    name: nameAtom,
    age: ageAtom,
    email: emailAtom,
    phone: phoneAtom
})
const NUMBER_OF_CATS = 3
const fireAtom = atom(3)

const FireComponent = () => {
    const [fire, setFire] = useAtom(fireAtom)
    const fireValue = useAtomValue(fireAtom)
    const increaseFire = () => {
        if (fire < 10) {
            setFire(fire + 1)
        }
    }
    const decreaseFire = () => {
        if (fire > 0) {
            setFire(fire - 1)
        }
    }
    const renderFire = () => {
        return Array.from({ length: fire }, (_, index) => <span key={index}>🔥</span>)
    }
    return <div className="p-4 rounded-md border space-y-2 ">
        <h2>FIRE</h2>
        <div className="flex gap-2">
            <button className="bg-red-500 text-white p-2 rounded-md" onClick={increaseFire}>Increase Fire</button>
            <button className="bg-blue-500 text-white p-2 rounded-md" onClick={decreaseFire}>Decrease Fire</button>
        </div>
        <div>{renderFire()}</div>
        <div>{fireValue}</div>
    </div>
}

const bigOjectAtom = atom({
    abu: {
        name: "abu",
        age: 20,
        email: "abu@gmail.com",
        phone: {
            country: "USA",
            number: "1234567890"
        }
    },
    ali: {
        name: "ali",
        age: 15,
        email: "ali@gmail.com",
        phone: {
            country: "japan",
            number: "51212123"
        }
    },
    sam: {
        name: "sam",
        age: 25,
        email: "sam@gmail.com",
        phone: {
            country: "USA",
            number: "1234567890"
        }
    }
})

const sampleEffect = atomEffect((get, set) => {
    const bigOject = get.peek(bigOjectAtom)
    const fire = get(fireAtom)
    console.log("bigOject", bigOject.abu.age)
    console.log("fire", fire)
    const runOperation = async () => {
        console.log("runOperation")
        set(bigOjectAtom, {
            ...bigOject,
            abu: {
                ...bigOject.abu,
                age: bigOject.abu.age + 1
            }
        })
    }
    runOperation()
    return () => {
        console.log("cleanup")
    }
})

export default function Page() {
    const catsAtom = useMemo(() => atom(Array.from({ length: NUMBER_OF_CATS })
        .reduce<Record<string, string>>((acc, _, index) => {
            acc[`cat${index}`] = `Cat ${index}`
            return acc
        }, {})), [])
    const cats = useAtom(catsAtom)
    useAtomValue(sampleEffect)
    return (
        <div className="space-y-4 container p-12">
            <h1>Form</h1>
            <div className="">
                {cats.map((cat, index) => (
                    <div key={index} className="bg-gray-200 p-4">
                        <pre>{JSON.stringify(cat, null, 2)}</pre>
                    </div>
                ))}
            </div>
            <FireComponent />

        </div>
    )
}