import {motion} from "framer-motion";
import React from "react";
import "./index.css";

const Modal = ({setSelectedImg, SelectedImg}) =>{
    const handleClick=(e)=>{
        if(e.target.classList.contains("backdrop")){
            setSelectedImg(null);
        }
    }
    return(
        <motion.div className="backdrop" onClick={handleClick} initial={{opacity:0}} animate={{opacity:1}}>
            <motion.img src={SelectedImg} alt="Imagem real" initial={{y:"-100vh"}} animate={{y:0}}></motion.img>
        </motion.div>
    );
}

export default Modal;