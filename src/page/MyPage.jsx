import { IoPersonCircleSharp } from 'react-icons/io5';
import { IconContext } from "react-icons/lib";
import { useState } from 'react';
import Navbar from "../components/Navbar";
import Card from '../components/ui/Card';
import styled from 'styled-components';

const MyPageContainer = styled.div`
    text-align: center;
    background: black;
    color: white;
`;

const MyPageContainerInner = styled.div`
    width: 65%;
    display: inline-block;
    text-align: start;
    margin-top: 30px;
`;

const ProfileContainer = styled.div`
    justify-content: center;
`;

const BioContainer = styled.div`
    margin-bottom: 35px;
    h4 {
        margin: 0;
        font-size: 30px;
    }
    p {
        margin: 0;
        font-size: 16px;
    }
`;

const TabContainer = styled.div`
    text-align: start;
    hr {
        margin: 0;
        background-color: #d5d5d5;
    }
`;

const TabBtn = styled.button`
    padding: 5px;
    margin-right: 30px;
    color: ${props => props.clicked === true ? 'white' : '#afafaf'};
    background: black;
    border: none;
    transition: all 0.2s;
    &:hover {
        cursor: pointer;
        color: white;
    }
`;

const TabDetail = styled.div`
    display: flex;
    flex-flow: row wrap;
    text-align: start;
`;

function MyPage() {

    const [history, setHistory] = useState(0);
    const [isClicked, setIsClicked] = useState([true, false, false, false, false]);

    const isDirector = true;
    const mytab = {
        0: <Liked />,
        1: <Funding />,
        2: <Keep />,
        3: <Account />,
        4: <MyFilm />
    }

    function tabClick(idx) {
        setHistory(idx);
        var newArray = [false, false, false, false, false];
        newArray[idx] = true;
        setIsClicked(newArray);
    }

    return (
        <MyPageContainer>
            <IconContext.Provider value={{ size: '140px' }}>
                <Navbar />
                <MyPageContainerInner>
                    <ProfileContainer>
                        <BioContainer>
                            <IoPersonCircleSharp />
                            <h4>Willy</h4>
                            <p>realywilly@naver.com</p>
                            {
                                isDirector === true
                                    ? <p>Director</p>
                                    : null
                            }
                        </BioContainer>
                    </ProfileContainer>
                    <TabContainer>
                        <TabBtn clicked={isClicked[0]} onClick={() => { tabClick(0) }}>좋아요 누른 작품</TabBtn>
                        <TabBtn clicked={isClicked[1]} onClick={() => { tabClick(1) }}>후원한 작품</TabBtn>
                        <TabBtn clicked={isClicked[2]} onClick={() => { tabClick(2) }}>보관함</TabBtn>
                        {
                            isDirector === true
                                ? <TabBtn clicked={isClicked[4]} onClick={() => { tabClick(4) }}>My 작품</TabBtn>
                                : null
                        }
                        <TabBtn clicked={isClicked[3]} onClick={() => { tabClick(3) }}>계정 설정</TabBtn>
                        <hr />
                        {mytab[history]}
                    </TabContainer>
                </MyPageContainerInner>
            </IconContext.Provider>
        </MyPageContainer>
    );
}

function Liked() {
    return (
        <TabDetail>
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
        </TabDetail>
    );
}

function Funding() {
    return (
        <TabDetail>
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
        </TabDetail>
    );
}

function Keep() {
    return (
        <TabDetail>
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
        </TabDetail>
    );
}

function Account() {
    return (
        <TabDetail>
            <p>계정설정 페이지입니다</p>
        </TabDetail>
    );
}

function MyFilm() {
    return (
        <TabDetail>
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
            <Card width={'220'} height={'430'} />
        </TabDetail>
    );
}

export default MyPage;