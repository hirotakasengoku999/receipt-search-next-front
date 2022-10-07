import { Alert, FileInput } from "flowbite-react"
import { useState } from "react";
import Layout from "../components/Layout"
import { Upload } from "../lib/posts";

const ImportFile = () => {
    const [message, setMessage] = useState("");

    const handlerUploadClick = async (e) => {
        const file = e.target.files[0];
        const formData = new FormData();
        formData.append('file', file);
        const uploadResult = Upload(formData);
        setMessage(uploadResult["message"]);
    }
    return (
        <Layout title="setting">
            <div id="fileUpload">
                <FileInput
                    id="file"
                    name="file"
                    onChange={handlerUploadClick}
                />
            </div>
            <p>{message}</p>
        </Layout>
    )
}

export default ImportFile