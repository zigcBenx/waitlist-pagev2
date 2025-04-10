import { NextRequest, NextResponse } from 'next/server'
import { sendWelcomeEmail } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    console.log('Received email in API route:', email)

    if (!email) {
      console.error('No email provided')
      return NextResponse.json(
        { error: 'Email is required' }, 
        { status: 400 }
      )
    }

    const emailSent = await sendWelcomeEmail(email)

    console.log('Email sent result:', emailSent)

    if (!emailSent) {
      return NextResponse.json(
        { error: 'Failed to send email' }, 
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Comprehensive API Route Error:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) }, 
      { status: 500 }
    )
  }
}