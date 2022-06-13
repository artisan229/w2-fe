import React, { useState } from 'react';
import styled from 'styled-components';
import Contents from './Contents';

const TabContainer = styled.div`
    width: 100%;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    hr {
        width: 53%;
        height: 0;
    }
`;

const TabRow = styled.div`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    hr {
        width: 100%;
        height: 0;
    }
`;

const TabButton = styled.button`
    background-color: black;
    color: ${(props) => props.color};
    font-size: large;
    width: 20%;
    border: none;
    &:hover {
        color: white;
        cursor: pointer;
    }
`;

function Tab() {
    const [tab, setTab] = useState('모든 영화');
    const [flag, setFlag] = useState('모든 영화');
    const category = ['모든 영화', '액션', '로맨스', '판타지', '회사', '모험', '재난', '스릴러', '공포', '청춘', '코미디', '가족', '드라마', '다큐멘터리', '일상'];

    function changeFlag(src) {
        setFlag(src);
        setTab(src);
    }

    return (
        <TabContainer>
            <TabRow>
                {
                    category.map((src, idx) => {
                        return (idx + 1) % 5 === 0
                            ? flag === src
                                ? <React.Fragment key={idx}>
                                    <TabButton onClick={() => changeFlag(src)} color={'white'}>{src}</TabButton>
                                    <hr />
                                </React.Fragment>
                                : <React.Fragment key={idx}>
                                    <TabButton key={idx} onClick={() => changeFlag(src)} color={'grey'}>{src}</TabButton>
                                    <hr />
                                </React.Fragment>
                            : flag === src
                            ? <TabButton key={idx} onClick={() => changeFlag(src)} color={'white'}>{src}</TabButton>
                            : <TabButton key={idx} onClick={() => changeFlag(src)} color={'grey'}>{src}</TabButton>
                    })
                }
            </TabRow>
            <Contents type={tab} />
        </TabContainer>
    )
}

export default Tab;