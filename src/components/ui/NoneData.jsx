import styled from "styled-components"

const MessageContainer = styled.div`
    background-color: black;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    height: 350px;
`;

const MessageBox = styled.p`
    color: white;
    background-color: black;
    font-size: large;
    font-weight: 300;
    text-align: center;
`;

function NoneData(props) {
    return (
        <MessageContainer>
            <MessageBox>{props.message}</MessageBox>
        </MessageContainer>
    )
}

export default NoneData;