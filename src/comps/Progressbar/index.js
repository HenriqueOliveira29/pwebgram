import React,{useEffect} from 'react';
import {motion} from 'framer-motion';
import useStorage from '../../hooks/useStorage';
import "./index.css";

const Progressbar = ({file, setFile}) =>{
    const {progress, url} = useStorage(file);
    return(
        <motion.div className="progress-bar" initial={{width:0}} animate={{width:progress+'%'}}>

        </motion.div>
    );
}

export default Progressbar;
