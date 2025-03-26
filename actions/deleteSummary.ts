'use server'

import { getDbConnection } from "@/utils/db"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function deleteSummary(id: string) {
    try {
        const { userId } = await auth()

        if (!userId) {
            redirect('/sign-in')
        }
        const sql = await getDbConnection()
        await sql`DELETE FROM pdf_summaries WHERE id=${id}`

        revalidatePath('/dashboard')

        return {
            success: true
        }

    } catch (error) {
        return {
            success: false
        }
    }

}