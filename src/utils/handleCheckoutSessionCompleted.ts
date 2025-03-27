import Stripe from "stripe";
import { getDbConnection } from "./db";

export async function handleCheckoutSessionCompleted(session: Stripe.Checkout.Session) {
    const customer = session.customer as string
    const { email, name } = session.customer_details!
    const price_id = session.line_items?.data[0].price?.id as string

    const sql = await getDbConnection()

    await createOrUpdateUser(sql, email!, name!, customer, price_id, session.status!)
    await createPayment(sql, session, price_id, email!)

}

export async function createOrUpdateUser(sql: any, email: string, full_name: string, customer_id: string, price_id: string, status: string ) {
    try {
        const user = await sql`SELECT * FROM users WHERE email=${email}`

        if (!user.length) {
            await sql`INSERT INTO users (email, full_name, customer_id, price_id, status) VALUES(${email}, ${full_name}, ${customer_id}, ${price_id}, ${status})`
        }
    } catch (e) {
        console.log(e)
    }

}

export async function createPayment(sql: any, session: Stripe.Checkout.Session, price_id: string, email: string) {
    try {
        const { id: stripe_payment_id, amount_total: amount, status } = session

        await sql`INSERT INTO payments (amount, status, stripe_payment_id, price_id, user_email) VALUES(${amount}, ${status}, ${stripe_payment_id}, ${price_id}, ${email})`
    } catch (e) {
        console.log(e)
    }

}