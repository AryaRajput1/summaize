import Stripe from "stripe";
import { getDbConnection } from "./db";

export async function handleSubsriptionDeleted(subscription: Stripe.Subscription) {

    const sql = await getDbConnection()
 
    await sql`UPDATE users SET status='cancelled' WHERE customer_id = ${subscription.customer}`

    console.log('Subscription cancelled', subscription)
}