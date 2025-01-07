import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const signature = req.headers.get('cal-signature')

    if (!signature) {
      return NextResponse.json(
        { error: 'No signature provided' },
        { status: 401 }
      )
    }

    // Verify the webhook signature
    const isValid = await verifySignature({
      payload: JSON.stringify(body),
      signature,
      secret: process.env.CAL_WEBHOOK_SECRET || '',
    })

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      )
    }

    // Handle different webhook events
    switch (body.triggerEvent) {
      case 'BOOKING_CREATED':
        await handleBookingCreated(body)
        break
      case 'BOOKING_RESCHEDULED':
        await handleBookingRescheduled(body)
        break
      case 'BOOKING_CANCELLED':
        await handleBookingCancelled(body)
        break
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Webhook error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

async function verifySignature({ payload, signature, secret }: {
  payload: string
  signature: string
  secret: string
}) {
  const crypto = require('crypto')
  const hmac = crypto.createHmac('sha256', secret)
  const digest = hmac.update(payload).digest('hex')
  return signature === digest
}

async function handleBookingCreated(booking: any) {
  // Here you would typically:
  // 1. Save the booking to your database
  // 2. Send confirmation emails
  // 3. Update any relevant calendar systems
  console.log('New booking created:', booking)
}

async function handleBookingRescheduled(booking: any) {
  // Handle rescheduled booking
  console.log('Booking rescheduled:', booking)
}

async function handleBookingCancelled(booking: any) {
  // Handle cancelled booking
  console.log('Booking cancelled:', booking)
}

