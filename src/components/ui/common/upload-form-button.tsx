import { useFormStatus } from "react-dom"
import { Button } from "../button"

function UploadFormButton() {
    const {pending} = useFormStatus()

  return (
    <Button className="bg-rose-500 hover:bg-rose-700" disabled={pending}>Upload PDF</Button>
  )
}
export default UploadFormButton