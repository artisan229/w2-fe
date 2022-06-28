import { useContext } from "react";
import { BasicContext } from "../provider/BasicProvider";
import { useEffect } from "react";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Modal from "./ui/Modal";
import MobileModal from "./ui/MobileModal";
import { useParams } from "react-router-dom";

function Info() {
    const { id } = useParams();
    const context = useContext(BasicContext);
    const movie = context.find(movie => String(movie.code) === id);
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)',
    });
    document.body.style.overflow = "hidden"

    return (
        <>
            {
                isMobile
                    ? <MobileModal data={movie} />
                    : <Modal data={movie} />
            }
        </>
    )
}

export default Info;