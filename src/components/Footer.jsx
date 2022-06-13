import styled from "styled-components"

const FooterContainer = styled.div`
    background-color: #2b2b2b;
    height: 150px;
`;

const FooterBox = styled.div`
    width: 50%;
    color: white;
    margin-left: auto;
    margin-right: auto;
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterBox>
                빈칸
            </FooterBox>
        </FooterContainer>
    )
}

export default Footer;