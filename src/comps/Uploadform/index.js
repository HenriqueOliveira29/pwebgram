import React, {useState} from 'react';
import Progressbar from '../Progressbar';
import "./index.css"

const Uploadform = () =>{
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const types = ['image/png', 'image/jpeg'];
    const handleChange = (e) =>{
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }
        else{
            setFile(null);
            setError('Por favor selecione um ficheiro de imagem (png ou jpeg)');
        }
    }
    return(
        <form>
            <label>
                <input type="file" onChange={handleChange}></input>
                <span>+</span>

            </label>
            <div className="output">
                { error && <div className="error"> {error}</div>}
                { file && <div>{file.name}</div>}
                {file && <Progressbar file={file} setFile={setFile}/>}
            </div>
        </form>
    );
}


export default Uploadform;
