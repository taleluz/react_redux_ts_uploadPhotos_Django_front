import React, { useState } from 'react';
import axios from 'axios';
import {setUpd} from './galSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
const Upl = () => {
    const dispatch = useAppDispatch();
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [uploadedFile, setUploadedFile] = useState<any | null>(null);
    const [desc, setdesc] = useState("")
    const [title, setTitle] = useState("")
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedFile(event.target!.files![0]);
    };

    const handleUpload = async () => {
        console.log("first")
        if (!selectedFile) {
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append("title", title);
        formData.append("desc", desc);
        console.log(formData)
        try {
            const response = await axios.post('http://127.0.0.1:8000/img', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            setUploadedFile(response.data.file);
            dispatch(setUpd())
        } catch (error) {
            console.error(error);
        }
    };

    const updUpload = async (id:number) => {
        console.log("first")
        if (!selectedFile) {
            return;
        }

        const formData = new FormData();
        formData.append('image', selectedFile);
        formData.append("title", title);
        formData.append("desc", desc);
        console.log(formData)
        try {
            const response = await axios.put('http://127.0.0.1:8000/img/' + id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })

            setUploadedFile(response.data.file);
            dispatch(setUpd())
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            Desc:<input onChange={(e)=>setdesc(e.target.value)} />
            Title:<input  onChange={(e)=>setTitle(e.target.value)} />
            {uploadedFile && <p>Uploaded file: {uploadedFile}</p>}
        </div>
    );
};

export default Upl;