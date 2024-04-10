'use server'
import { cookies } from "next/headers"
import { NextResponse } from "next/server"
export async function GET() {
    const response = NextResponse
    cookies().set('hello', 'world', {
        maxAge: 60 * 5,
        httpOnly: true,
        secure: true,
        sameSite: 'lax'
    })

    return response.json({ hello: 'world' })
}

export async function POST() {
    const response = NextResponse
    cookies().has('hello') && cookies().delete('hello')
    return response.json({ success: true })
}

