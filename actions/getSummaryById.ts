'use server'

import { getDbConnection } from "@/utils/db"
import { auth } from "@clerk/nextjs/server"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function getSummaryById(id: string) {
    try {
        const { userId } = await auth()

        if (!userId) {
            redirect('/sign-in')
        }
        const sql = await getDbConnection()
        const data = await sql`SELECT * FROM pdf_summaries WHERE id=${id}`

        return {
            data: data[0]
        }

    } catch (error) {
        return {
            data: null
        }
    }

}