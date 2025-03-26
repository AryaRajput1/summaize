'use server'

import { getDbConnection } from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface DATA_TYPE {
    user_id?: string,
    original_file_url: string,
    summary_text: string,
    title: string,
    file_name: string
}

export async function savePDFSummary(data: DATA_TYPE) {
    const { userId } = await auth()
    if(!userId) {
        throw new Error('User Not Found.')
    }

    data['user_id'] = userId

    const sql = await getDbConnection()

    console.log(data)

    const summary = await sql`INSERT INTO pdf_summaries (user_id, original_file_url, summary_text, title, file_name) VALUES (${data.user_id}, ${data.original_file_url}, ${data.summary_text}, ${data.title}, ${data.file_name});`
    return summary
}