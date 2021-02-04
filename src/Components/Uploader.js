import React, {useState} from 'react'
import styles from "./UploaderStyles.module.scss";
import axios from 'axios';

// input type="file" adds to a FileList object which constructs a 'files' array.
// 

export default function Uploader() {
    const [file, setFile] = useState(null);
    const [fPreview, setFPreview] = useState("");
    const [flabel, setFlabel] = useState('Choose a file');
    const [uploaded, setUploaded] = useState({});
    const onPreview = event => {
        setFPreview(URL.createObjectURL(event.target.files[0]));
        setFile(event.target.files[0]);
        setFlabel(event.target.files[0].name);
    }
    const onSubmit = event => {
        console.log(file)
        event.preventDefault();     // so page is not reloaded
        const formData = new FormData();        // part of JavaScript
        formData.append('file', file);
        // make axios post request
        console.log(formData);
        axios.post('http://localhost:3010/sprojects/upload_img', formData)
        .then(res => {
            console.log("Succesful upload: " + res);
            const {fileName, filePath} = res.data;
            setUploaded({fileName, filePath});
        }).catch(err => {
            // if no image or cloudinary internal error
            if (err.status===500) {
                console.log("Internal server error!");
            } else {
                console.log(err)
            }
        });
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <div className={styles.Container}>

                    <label className={styles.Label}>{flabel}</label>
                    <input type="file" onChange={onPreview}></input>
                    <img src={fPreview}/>
                    <input type="submit" value="Upload"/>
                </div>
            </form>
        </div>

    )
}
