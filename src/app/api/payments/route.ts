import { handleCheckoutSessionCompleted } from "@/utils/handleCheckoutSessionCompleted";
import { NextRequest, NextResponse } from "next/server";
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!)

export async function POST(req: NextRequest) {

  const sig = req.headers.get('stripe-signature')
  try {
    const body = await req.text()

    const event = stripe.webhooks.constructEvent(body, sig!, process.env.STRIPE_WEBHOOK_SECRET!)

    let session
    let sessionId

    switch (event.type) {
      case 'checkout.session.completed':
        sessionId = event.data.object.id
        session = await stripe.checkout.sessions.retrieve(
          sessionId,
          {
            expand: ['line_items']
          }
        );
        await handleCheckoutSessionCompleted(session)
        break;
      case 'customer.subscription.deleted':
        session = event.data.object
        sessionId = event.data.object.id
        await handleSubsriptionDeleted(session)
        break;
      default: console.log('Unhandeled event type', event.type)
    }
  } catch (err) {
    return NextResponse.json({
      success: false,
      err
    }, { status: 400 })
  }

  return NextResponse.json({
    success: true
  }, { status: 200 })
}