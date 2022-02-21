import Card from './ui/Card';
import styled from 'styled-components';

const MagazineContainer = styled.div`
    background-color: white;
`;

const Article = styled.div`
    display: flex;
    justify-content: space-around;
    overflow: hidden;
`;

function Magazine() {
    return (
        <MagazineContainer>
            <Article>
                <Card width={310} height={432} onlyPoster={true}/>
                <Card width={310} height={432} onlyPoster={true}/>
                <Card width={310} height={432} onlyPoster={true}/>
                <Card width={310} height={432} onlyPoster={true}/>
            </Article>
            <p>더 보기</p>
        </MagazineContainer>
    );
}

export default Magazine;