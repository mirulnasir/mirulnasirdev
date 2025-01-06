'use server'
import { NextRequest, NextResponse } from "next/server"

const defaultUrl = 'https://google.com'
export async function POST(request: NextRequest) {
    const toUrl = request.nextUrl.searchParams.get('to')
    const redirectUrl = toUrl || defaultUrl
    return Response.redirect(redirectUrl)
}
