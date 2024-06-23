'use client'
import { Button } from '@/components/ui/button'
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'


import * as React from 'react'

type HelloDisplayProps = {

}

const Spinner = (props: React.ComponentPropsWithoutRef<'svg'>) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256" {...props}><path d="M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm37.25,58.75a8,8,0,0,0,5.66-2.35l22.63-22.62a8,8,0,0,0-11.32-11.32L167.6,77.09a8,8,0,0,0,5.65,13.66ZM224,120H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"></path></svg>
)

const API_URL = "https://www.mirulnasir.dev/api/hello"
type formStatus = { state: 'idle' } | { state: 'loading' } | {
    state: 'success', message: string
} | { state: 'error', message: string }

const HelloDisplay = ({ }: HelloDisplayProps) => {
    const [cookieSetting, setCookieSetting] = React.useState<ResponseCookie>({
        name: 'hello', value: 'world', maxAge: 60 * 5, httpOnly: true,
        sameSite: 'lax', secure: true
    })
    const [status, setStatus] = React.useState<formStatus>({ state: 'idle' })
    const handleClickGet = async () => {
        setStatus({ state: 'loading' })
        try {
            const response = await fetch('/api/hello', {
                method: 'GET',
            })
            if (!response.ok) {
                return setStatus({ state: 'error', message: response.statusText })
            }
            const data = await response.json()
            if (data) {
                return setStatus({ state: 'success', message: data.message })
            }
        }
        catch (error) {
            console.error('GET', error)
            if (error && typeof error === 'object' && 'message' in error) {
                return setStatus({ state: 'error', message: error.message as string })
            } else if (error instanceof Error) {
                return setStatus({ state: 'error', message: error.message })
            }

        }
    }
    const handleClickPost = async () => {
        setStatus({ state: 'loading' })
        try {
            const response = await fetch('/api/hello', {
                method: 'POST',
            })
            if (!response.ok) {
                return setStatus({ state: 'error', message: response.statusText })
            }
            const data = await response.json()
            if (data) {
                return setStatus({ state: 'success', message: data.message })
            }
        }
        catch (error) {

            if (error && typeof error === 'object' && 'message' in error) {
                return setStatus({ state: 'error', message: error.message as string })
            } else if (error instanceof Error) {
                return setStatus({ state: 'error', message: error.message })
            }
        }

    }
    return (
        <div className='space-y-8'>
            <div className="space-y-5 w-64 mx-auto">
                <div className="space-y-2  ">
                    <h3 className="font-semibold leading-none tracking-tight">Api Url</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                        <div className="flex justify-between">
                            <span>{API_URL}</span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col space-y-2 ">
                    <h3 className="font-semibold leading-none tracking-tight">Cookie values</h3>
                    <div className="text-muted-foreground text-sm space-y-1">
                        {Object.entries(cookieSetting).map(([key, _value]) => {
                            let value = _value
                            if (typeof _value === 'boolean') value = _value ? 'true' : 'false'
                            return (
                                <div key={key} className="flex justify-between">
                                    <span>{key}</span>
                                    <span>{value}</span>
                                </div>
                            )

                        })}
                    </div>
                </div>
            </div>
            <div className="flex gap-2 justify-center">
                <Button
                    onClick={() => handleClickGet()}
                    disabled={status.state === 'loading'}
                >
                    Set Cookie
                </Button>
                <Button
                    onClick={() => handleClickPost()}
                    disabled={status.state === 'loading'}

                >
                    Clear Cookie
                </Button>
            </div>
            {status.state === 'success' && <div className='text-green-500 text-sm text-center'>{status.message}</div>}
            {status.state === 'error' && <div className='text-red-500 text-sm text-center'>{status.message}</div>}
        </div>
    )
}

export default HelloDisplay