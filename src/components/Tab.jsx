import { useState } from 'react';
import styled from 'styled-components';
import Contents from './Contents';

const TabContainer = styled.div`
    width: 100%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    hr {
        width: 50%;
    }
`;

const TabRow = styled.div`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-around;
`;

const TabButton = styled.button`
    background-color: black;
    color: white;
    font-size: large;
    &:hover {
        cursor: pointer;
    }
`;

function Tab() {
    const [tab, setTab] = useState(0);

    return (
        <TabContainer>
            <hr />
            <TabRow>
                <TabButton onClick={() => setTab(0)}>모든 영화</TabButton>
                <TabButton onClick={() => setTab(1)}>일상</TabButton>
                <TabButton onClick={() => setTab(2)}>회사</TabButton>
                <TabButton onClick={() => setTab(3)}>다큐멘터리</TabButton>
                <TabButton onClick={() => setTab(4)}>로맨스</TabButton>
            </TabRow>
            <Contents typeNum={tab} />
        </TabContainer>
    )
}

export default Tab;