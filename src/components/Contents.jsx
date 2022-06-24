import Card from "./ui/Card";
import styled from "styled-components";
import { useContext } from 'react';
import { BasicContext } from "../provider/BasicProvider";
import NoneData from "./ui/NoneData";

const ContentsContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
`;

const GridContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 1100px;
    margin-bottom: 300px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    place-items: center;
    @media screen and (max-width:768px) {
        width: 90%;
        grid-template-columns: 1fr 1fr 1fr;
    }
`;

function Contents(props) {
    const context = useContext(BasicContext);
    const result = context.filter(movie => props.type === 'ALL' ? true : movie.tag.includes(props.type))
        .filter(movie => props.search === null ? true : movie.title.includes(props.search) || movie.director.includes(props.search));
    return (
        <ContentsContainer>
            {
                props.type !== 'ALL' && result.length === 0
                    ? <NoneData message={'해당 카테고리의 영화가 없습니다.'} />
                    : result.length === 0
                        ? <NoneData message={'검색되는 영화가 없습니다.'} />
                        : <GridContainer>
                            {
                                result.map((movie, idx) => {
                                    return <Card key={idx} movie={movie} />
                                })
                            }
                        </GridContainer>
            }
        </ContentsContainer>
    );
}

export default Contents;