import { auth, currentUser } from "@clerk/nextjs/server";
import { getDbConnection } from "./db";
import { PLANS } from "./const";

export async function getSubscriptionData() {
    const user = await currentUser()
    const user_id = user?.id

    const sql = await getDbConnection()

    const email = user?.emailAddresses[0].emailAddress

    const users = await sql`SELECT price_id, status FROM users WHERE email=${email}`

    const summaries = await sql`SELECT COUNT(*) FROM pdf_summaries WHERE user_id=${user_id}`

    const price_id = users?.[0]?.price_id
    const isActive = users?.[0]?.status === 'complete'
    const totalCount = summaries?.[0]?.count

    const plan = PLANS.find(plan => plan.price_id == price_id)

    return {
        planTitle: (isActive ? plan?.title : 'Buy a') + ' Plan',
        isMaxLimitReached: totalCount >= plan?.limit!,
        isActive
    }
}


