import { z } from 'zod'

export const fileSchema = z.object({
    file: z.instanceof(File, { message: 'Invalid File!' }).refine((file) => file.size <= 20 * 1024 * 1024, {
        message: 'File size must be less than 20 MB.'
    }).refine((file) => file.type.startsWith('application/pdf'), { message: 'File must be a PDF.' })
})