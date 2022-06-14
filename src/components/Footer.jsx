import styled from "styled-components"

const FooterContainer = styled.div`
    background-color: #2b2b2b;
    height: 150px;
`;

const FooterBox = styled.div`
    width: 70%;
    color: grey;
    margin-left: auto;
    margin-right: auto;
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterBox>
                <span>Joodra | CEO. Hyunho Cho<br /></span>
                <span>Tel. 010-4543-4731 | Email. pronce7@joodra.com<br />
                    Address. Room 207, 45-9, Goryeodae-ro 26-gil, Seongbuk-gu, Seoul, Republic of Korea <br /></span>
                <span>Copyright ⓒ 2021 Joodra All rights reserved.</span>
            </FooterBox>
        </FooterContainer>
    )
}

export default Footer;