import styled from "styled-components"

const MessageContainer = styled.div`
    background-color: #111111;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    height: 400px;
`;

const MessageBox = styled.p`
    color: white;
    background-color: #111111;
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