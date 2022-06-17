import styled from "styled-components"

const FooterContainer = styled.div`
    background-color: #2b2b2b;
    height: 100px;
    @media screen and (max-width: 768px) {
        height: 180px;
    }
`;

const FooterBox = styled.div`
    width: 70%;
    padding-top: 10px;
    color: grey;
    margin-left: auto;
    margin-right: auto;
    font-size: small;
    p {
        margin-top: 5px;
    }
`;

function Footer() {
    return (
        <FooterContainer>
            <FooterBox>
                <span>(주)주드라 | 대표자: 조현호 | 사업자번호: 247-88-02468<br /></span>
                <span>개인정보보호책임자: 강명균 | 이메일: pronce7@joodra.com<br />
                주소: 서울특별시 성북구 고려대로26길 45-9, 207호<br /></span>
                <p>ⓒJoodra. ALL RIGHTS RESERVED</p>
            </FooterBox>
        </FooterContainer>
    )
}

export default Footer;