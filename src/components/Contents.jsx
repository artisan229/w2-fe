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
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

function Contents(props) {
    const context = useContext(BasicContext);
    const result = context.filter(movie => movie.tag === props.type);

    return (
        <ContentsContainer>
            {
                props.type !== '모든 영화' && result.length === 0
                    ? <NoneData message={'해당 카테고리의 영화가 없습니다.'} />
                    : <GridContainer>
                        {
                            props.type === '모든 영화'
                                ? context && context.map((movie, idx) => {
                                    return <Card key={idx} thumbnail={movie.thumbnail} title={movie.title} director={movie.director} tag={movie.tag} date={movie.date} id={movie.code} />
                                })
                                : result.map((movie, idx) => {
                                    return <Card key={idx} thumbnail={movie.thumbnail} title={movie.title} director={movie.director} tag={movie.tag} date={movie.date} id={movie.code} />
                                })
                        }
                    </GridContainer>
            }
        </ContentsContainer>
    );
}

export default Contents;