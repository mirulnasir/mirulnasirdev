'use server'
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

interface User {
    // Required fields - these are typically always present
    fullName: string;
    username: string;
    emailAddress: string;
    createdAt: string;
    isActive: boolean;

    // Potentially nullable fields - these might be optional during registration or updates
    gender: 'M' | 'F' | 'O' | null;  // Some users might prefer not to specify
    dateOfBirth: string | null;      // Might not be required in all cases
    phoneNumber: string | null;      // Often optional in many systems

    // Nested address object - could be entirely optional
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: string;
        country: string;
    } | null;

    // System-generated field that might be null before first login
    lastLoginAt: string | null;
}
const testData: User = {
    fullName: 'Papaya API User',
    username: 'papaya_api_test',
    emailAddress: 'test@papaya-api.dev',
    gender: 'M',
    dateOfBirth: '1990-05-15',
    phoneNumber: '+1-555-API-TEST',
    address: {
        street: '123 API Street',
        city: 'Papaya Valley',
        state: 'CA',
        zipCode: '94105',
        country: 'USA'
    },
    createdAt: '2024-01-01T00:00:00Z',
    lastLoginAt: '2024-03-19T10:30:00Z',
    isActive: true
}
export async function GET() {
    const response = NextResponse

    return response.json(testData)
}



