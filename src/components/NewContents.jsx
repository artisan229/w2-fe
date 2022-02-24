import Card from "./ui/Card";
import styled from "styled-components";
import Slider from "react-slick";

const CardContainer = styled(Slider)`
    .slick-slider {
        display: flex;
        justify-content: center;
    }
`;


function NewContents() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
    };
    return (
        <CardContainer {...settings}>
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
        </CardContainer>
    );
}

export default NewContents;