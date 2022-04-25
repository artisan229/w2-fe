import Card from "./ui/Card";
import styled from "styled-components";
import Slider from "react-slick";
import { useContext } from 'react';
import { AppStateContext } from "../provider/AppStateProvider";

const CardContainer = styled(Slider)`
    .slick-slider {
        display: flex;
        justify-content: center;
        box-sizing: border-box;
    }
`;

function Contents() {
    const context = useContext(AppStateContext);
    const settings = {
        slide: 'div',
        infinite: false,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4
    };
    return (
        <CardContainer {...settings}>
            {
                context && context.map((movie, idx) => {
                    return <Card key={idx} width={'330'} height={'270'} thumbnail={movie.thumbnail} title={movie.title} director={movie.director} tag={movie.tag} date={movie.date} id={movie.id} />
                })
            }
        </CardContainer>
    );
}

export default Contents;