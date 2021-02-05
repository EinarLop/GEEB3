import {React, useState, useEffect} from 'react';
import {base} from '../base';

// Migrate this logic to parent component CreateSProject
// Use an array of files and fileURLS to loop over

export default function ImageUploader() {
    const [file, setFile] = useState(null);
    const [fileURL, setFileURL] = useState(null);
    const onFileChange = (e) => {
        setFile(e.target.files[0])
        console.log("Added file", file.name);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        if (file) {
            const storageRef = app.storage().ref();
            const fileRef = storageRef.child(file.name);
            await fileRef.put(file);
            setFileURL(await fileRef.getDownloadURL());

            // We stored the image. Then what? The project must have been created before we can actually
            // save the image url to that project's images array.
        } else {
            // show an error
            console.log("No file");
            return;
        }
    }

    return (
        <>
            <form>
                <input type="file" onChange={onFileChane}/>
                <input type="submit"/>
            </form>
        </>
    )
}
