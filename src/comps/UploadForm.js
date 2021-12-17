import React, { useState } from "react";

const UploadForm = () => {
    const [file, setFile] = useState(null); //sve dok ne selectujemo fajl 
    const [error, setError] = useState(null);

    //array dozvoljenih tipova koje je moguce upload-ovati
    const types = ['image/png', 'image/jpeg'];

    const handleChange = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpeg)')
        }
    }
    return (
        <form>
            <input type="file" onChange={handleChange} />
            <span>+</span>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div >{file.name}</div>}
            </div>
        </form>
    )
}

export default UploadForm;