import React, { useState } from 'react';
import styled from 'styled-components';
import Search from './Search';
import Contents from './Contents';

const TabContainer = styled.div`
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    hr {
        width: 53%;
        height: 0;
    }
`;

const TabRow = styled.div`
    width: 50%;
    margin-top: 40px;
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
    @media screen and (max-width:768px){
        width: 80%;
        margin-bottom: 15px;
    }
`;

const TabButton = styled.button`
    background-color: #111111;
    color: ${(props) => props.color};
    font-size: large;
    width: 20%;
    border: none;
    &:hover {
        transition: all 0.3s;
        color: white;
        cursor: pointer;
    }
    @media screen and (max-width:768px) {
        font-size: small;
        text-overflow: inherit;
        white-space: nowrap;
    }
`;

function Tab() {
    const [tab, setTab] = useState('ALL');
    const [flag, setFlag] = useState('ALL');
    const [search, setSearch] = useState(null);
    const category = ['ALL', '액션', '로맨스', '판타지', '회사', '모험', '사회문제', '스릴러', '공포', '청춘', '코미디', '가족', '드라마', '다큐', '일상'];

    function changeFlag(src) {
        setFlag(src);
        setTab(src);
    }

    return (
        <TabContainer>
            <Search type={tab} setSearch={setSearch}/>
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
            <Contents type={tab} search={search} />
        </TabContainer>
    )
}

export default Tab;