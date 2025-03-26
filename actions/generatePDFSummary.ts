'use server'

import { generateSummaryUsingOpenAI } from "@/utils/generateSummaryUsingOpenAI"
import { parsePDF } from "@/utils/parsePdf"
import { auth } from "@clerk/nextjs/server"

export async function generatePDFSummary(uploadResponse: {
    serverData: {
        userId: string,
        file: {
            url: string,
            name: string
        }
    }
}[]) {
    await auth.protect()

    if (!uploadResponse) {
        return {
            success: false,
            message: 'File upload failed.',
            data: null
        }
    }
    const { serverData: {
        userId,
        file: { url, name }
    } } = uploadResponse[0]

    if (!url) {
        return {
            success: false,
            message: 'File upload failed.',
            data: null
        }
    }

    try {
        const data = await parsePDF(url)

        if (!data) {
            return {
                success: false,
                message: 'File upload failed.',
                data: null
            }
        }

        const summary = await generateSummaryUsingOpenAI(data)

        if(!summary) {
            return {
                success: false,
                message: 'Summary generation Failed.',
                data: null
            }
        }

        return {
            success: true,
            message: 'Summary generated Successfully.',
            data: summary
        }

    } catch (error) {
        return {
            success: false,
            message: 'File upload failed.',
            data: null
        }
    }
}