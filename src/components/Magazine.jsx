import Card from './ui/Card';
import styled from 'styled-components';
import Slider from 'react-slick';

const MagazineContainer = styled.div`
    background-color: white;
    text-align: center;
`;

const Article = styled(Slider)`
    .slick-slider {
        display: flex;
        justify-content: space-around;
        overflow: hidden;
    }
`;

function Magazine() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear"
    };

    return (
        <MagazineContainer>
            <h2>Magazine</h2>
            <Article {...settings}>
                <Card width={310} height={432} onlyPoster={true} />
                <Card width={310} height={432} onlyPoster={true} />
                <Card width={310} height={432} onlyPoster={true} />
                <Card width={310} height={432} onlyPoster={true} />
                <Card width={310} height={432} onlyPoster={true} />
                <Card width={310} height={432} onlyPoster={true} />
            </Article>
            <p>더 보기</p>
        </MagazineContainer>
    );
}

export default Magazine;