'use client'
import { Button } from '@/components/ui/button'


import * as React from 'react'

type HelloDisplayProps = {

}

const HelloDisplay = ({ }: HelloDisplayProps) => {
    const handleClickGet = async () => {
        try {
            const response = await fetch('/api/hello', {
                method: 'GET',
            })
            const data = await response.json()
            console.log('GET', data)
        }
        catch (error) {
            console.error('GET', error)
        }
    }
    const handleClickPost = async () => {
        try {
            const response = await fetch('/api/hello', {
                method: 'POST',
            })
            const data = await response.json()
            console.log('POST', data)
        }
        catch (error) {
            console.error('POST', error)
        }

    }
    return (
        <>
            <div className="flex gap-2">
                <Button
                    onClick={() => handleClickGet()}
                >
                    Get  Hello
                </Button>
                <Button
                    onClick={() => handleClickPost()}
                >
                    Post Hello
                </Button>
            </div>
        </>
    )
}

export default HelloDisplay