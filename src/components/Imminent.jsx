import styled from "styled-components";
import Card from "./ui/Card";

const ImminentContainer = styled.div`
    background: black;
    text-align: center;
    h2, h5 {
        margin: 0;
    }
`;

const MovieContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    overflow: hidden;
`;

function Imminent() {
    return (
        <ImminentContainer>
            <h5>프리미엄관</h5>
            <h2>입관 직전 작품</h2>
            <MovieContainer>
                <Card width={265} height={380} onlyPoster={true} />
                <Card width={265} height={380} onlyPoster={true} />
                <Card width={265} height={380} onlyPoster={true} />
                <Card width={265} height={380} onlyPoster={true} />
            </MovieContainer>
        </ImminentContainer>
    );
}

export default Imminent;