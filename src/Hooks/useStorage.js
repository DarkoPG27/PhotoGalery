import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
const useStorage = (file) => {
    const [progress, setProgress] = useState(0); // progress of upload
    const [error, setError] = useState(null); // any error from upload
    const [url, setUrl] = useState(null); // img url from storage after the image is uploaded

    useEffect(() => {
        // references

        const storageRef = ref(projectStorage, file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                let percentage =
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setProgress(percentage);
            },
            (err) => {
                setError(err);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then(url =>

                    setUrl(url)
                )
            }
        );
    }, [file]); //ako se promijeni file, pokrecu se kod unutar funkcije unutar useEffect-a

    return { progress, url, error }
}

export default useStorage;
