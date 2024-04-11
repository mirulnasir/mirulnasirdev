'use server'
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function GET() {
    const response = NextResponse
    cookies().set('hello', 'world', {
        maxAge: 60 * 5,
        httpOnly: true,
        secure: true,
        sameSite: 'lax'
    })
    if (!cookies().has('hello')) {
        // throw new Error('failed to set cookies')
        return response.json({}, { status: 500, statusText: 'failed to set cookies' })

    }
    await delay(500)
    return response.json({ message: 'added cookies "hello". please check cookies tab.' })
}

export async function POST() {
    const response = NextResponse
    if (!cookies().has('hello')) {
        // throw new Error('cookies not found')
        return response.json({ message: 'cookies not found' }, { status: 404, statusText: 'cookies not found' })
    }
    cookies().delete('hello')
    return response.json({ message: 'deleted cookies "hello".' })
}

