import { useFormStatus } from "react-dom";
import UploadLoadingSkeleton from "./upload-loading-skeleton";

function UploadLoading() {
  const { pending } = useFormStatus();

  if(pending){
    <UploadLoadingSkeleton/>
  }
  return <UploadLoadingSkeleton/>;
}
export default UploadLoading;
