import React, {useState, useEffect} from 'react';
import {base} from '../base';

// Migrate this logic to parent component CreateSProject
// Use an array of files and fileURLS to loop over

export default function ImageUploader() {
    const [file, setFile] = useState(null);
    const[fileURLs, setFileURLs] = useState(Array());
    const onFileChange = (e) => {
        setFile(e.target.files[0])
        console.log("Added file", e.target.files[0].name);
    }
    const onSubmit = async (e) => {
        console.log("Submitting");
        e.preventDefault();
        if (file) {
            const storageRef = base.storage().ref();
            const fileRef = storageRef.child(file.name);
            await fileRef.put(file);
            console.log("Saved image to storage")
            console.log("Now setting url...")
            const newUrl = await fileRef.getDownloadURL()
            setFileURLs((fileURLs) => [...fileURLs, newUrl]);
            // We stored the image and pushed the new Url to array. Then what? The project must have been created before we can actually
            // save the image url to that project's images array.
        } else {
            // show an error
            console.log("No file");
            return;
        }
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="file" onChange={onFileChange}/>
                <input type="submit"/>
            </form>
            <p>{JSON.stringify(fileURLs)}</p>
            <div>
                {
                fileURLs.map((url, index) => (
                    <img src={url} key={index}/>
                ))
                }
            </div>
        </div>
    )
}
