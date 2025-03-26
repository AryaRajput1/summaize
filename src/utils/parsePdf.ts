import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

export const parsePDF = async (url: string) => {
    try {
        const response = await fetch(url)
        const blob = await response.blob()

        const arrayBuffer = await blob.arrayBuffer()

        const loader = new PDFLoader(new Blob([arrayBuffer]));

        const docs = await loader.load()

        console.log(docs)

        return docs.map(doc => doc.pageContent).join('\n')
    } catch (error) {
        console.log({error})
        throw error
    }
}