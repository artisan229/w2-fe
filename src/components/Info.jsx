import { useContext } from "react";
import { useSelector } from "react-redux";
import { BasicContext } from "../provider/BasicProvider";
import { useEffect } from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Modal from "./ui/Modal";
import MobileModal from "./ui/MobileModal";

function Info() {
    const modalState = useSelector((state) => state.modal);
    const context = useContext(BasicContext);
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });
    const [movie, setMovie] = useState({});
    let temp = {};

    useEffect(() => {
        if (modalState.value === 0) {
            setMovie({});
        } else if (isMobile) {
            temp = context.find(movie => movie.code === modalState.value)
            setMovie(temp);
        } else {
            document.body.style.overflow = "hidden"
            temp = context.find(movie => movie.code === modalState.value)
            setMovie(temp);
        }
    }, [modalState])
    
    if(modalState.value === 0) {
        return null
    } else if (isMobile) {
        return <MobileModal data={movie} />
    } else {
        return <Modal data={movie} />
    }
}

export default Info;