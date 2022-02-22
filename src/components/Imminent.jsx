import styled from "styled-components";
import Card from "./ui/Card";
import Slider from "react-slick";

const ImminentContainer = styled.div`
    color: white;
    background: black;
    text-align: center;
    h2, h5 {
        margin: 0;
    }
`;

function Imminent() {
    return (
        <ImminentContainer>
            <h5>프리미엄관</h5>
            <h2>입관 직전 작품</h2>
            <ImminentMovieSlider />
        </ImminentContainer>
    );
}

function ImminentMovieSlider() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
    };
    return (
        <Slider {...settings}>
            <div>
                <Card width={265} height={380} onlyPoster={true} />
            </div>
            <div>
                <Card width={265} height={380} onlyPoster={true} />
            </div>
            <div>
                <Card width={265} height={380} onlyPoster={true} />
            </div>
            <div>
                <Card width={265} height={380} onlyPoster={true} />
            </div>
            <div>
                <Card width={265} height={380} onlyPoster={true} />
            </div>
            <div>
                <Card width={265} height={380} onlyPoster={true} />
            </div>
        </Slider>
    );
}

export default Imminent;