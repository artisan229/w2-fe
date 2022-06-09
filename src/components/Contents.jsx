import Card from "./ui/Card";
import styled from "styled-components";
import { useContext } from 'react';
import { BasicContext } from "../provider/BasicProvider";

const CardContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 1100px;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;

function Contents(props) {
    const context = useContext(BasicContext);
    const category = ['일상', '회사', '다큐멘터리', '로맨스'];
    return (
        <CardContainer>
            {
                props.typeNum === 0
                ? context && context.map((movie, idx) => {
                    return <Card key={idx} thumbnail={movie.thumbnail} title={movie.title} director={movie.director} tag={movie.tag} date={movie.date} id={movie.code} />
                })
                : context && context.map((movie, idx) => {
                    return movie.tag === category[props.typeNum - 1]
                    ? <Card key={idx} thumbnail={movie.thumbnail} title={movie.title} director={movie.director} tag={movie.tag} date={movie.date} id={movie.code} />
                    : null
                })
            }
        </CardContainer>
    );
}

export default Contents;