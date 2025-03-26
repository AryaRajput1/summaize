import OpenAI from "openai";
import { SUMMARY_SYSTEM_PROMPT } from "./prompt/summaryPrompt";
import { generateSummaryUsingGemini } from "./generateSummaryUsingGemini";
const client = new OpenAI({ apiKey: '' });

export const generateSummaryUsingOpenAI = async (pdfText: string) => {
    try {
        const completion = await client.chat.completions.create({
            model: "gpt-4o",
            messages: [
                {
                    role: "system",
                    content: SUMMARY_SYSTEM_PROMPT,
                },
                {
                    role: 'user',
                    content: `Transform this document into an engaging, easy-to-read summary with contextually relevant emojis and proper markdown formatting: \n\n${pdfText}`,
                },
            ],
        });

        return completion.choices[0].message.content

    } catch (error) {
        try {

            const summary = await generateSummaryUsingGemini(pdfText) as string

            return summary
        } catch (error) {
            throw error
        }
    }

}