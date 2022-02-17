import { IoPersonCircleSharp } from 'react-icons/io5';
import { IconContext } from "react-icons/lib";
import { useState } from 'react';
import Navbar from "../components/Navbar";
import styled from 'styled-components';

const MyPageContainer = styled.div`
    background: black;
    color: white;
`;

const TabContainer = styled.div`
    text-align: center;
`;

const TabBtn = styled.button`
    margin-right: 30px;
    color: white;
    background: black;
    border: none;
    &:hover {
        cursor: pointer;
    }
`;

function MyPage() {

    const [history, setHistory] = useState(0);
    const mytab = {
        0: <Liked />,
        1: <Funding />,
        2: <Keep />,
        3: <Account />,
        4: <MyFilm />
    }

    return (
        <MyPageContainer>
            <IconContext.Provider value={{ size: '70px' }}>
                <Navbar />
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <IoPersonCircleSharp />
                    <div style={{ padding: '20px' }}>
                        <h4>Willy</h4>
                        <p>realywilly@naver.com</p>
                        <hr />
                    </div>
                </div>
                <TabContainer>
                    <TabBtn onClick={()=>{setHistory(0)}}>좋아요 누른 작품</TabBtn>
                    <TabBtn onClick={()=>{setHistory(1)}}>후원한 작품</TabBtn>
                    <TabBtn onClick={()=>{setHistory(2)}}>보관함</TabBtn>
                    <TabBtn onClick={()=>{setHistory(3)}}>계정 설정</TabBtn>
                    <TabBtn onClick={()=>{setHistory(4)}}>My 작품</TabBtn>
                    {mytab[history]}
                </TabContainer>
            </IconContext.Provider>
        </MyPageContainer>
    );
}

function Liked() {
    return <p>좋아요 누른 작품</p>
}

function Funding() {
    return <p>펀딩한 작품</p>
}

function Keep() {
    return <p>보관함</p>
}

function Account() {
    return <p>계정 설정</p>
}

function MyFilm() {
    return <p>My 작품</p>
}

export default MyPage;