import styled from "styled-components";
import Card from "./ui/Card";
import Slider from "react-slick";

const ImminentContainer = styled.div`
    color: white;
    background: black;
    text-align: center;
    overflow: hidden;
    h2, h5 {
        margin: 0;
    }
`;

function Imminent() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <ImminentContainer>
            <h5>프리미엄관</h5>
            <h2>입관 직전 작품</h2>
            <Slider {...settings}>
                <Card width={265} height={380} onlyPoster={true} />
                <Card width={265} height={380} onlyPoster={true} />
                <Card width={265} height={380} onlyPoster={true} />
                <Card width={265} height={380} onlyPoster={true} />
                <Card width={265} height={380} onlyPoster={true} />
            </Slider>
        </ImminentContainer>
    );
}

export default Imminent;