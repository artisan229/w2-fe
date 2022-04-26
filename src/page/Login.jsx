import Navbar from "../components/Navbar";
import styled from "styled-components";

const LoginContainer = styled.div`
    text-align: center;
    img {
        padding: 30px;
    }
`;

const LoginBtn = styled.img`
    &:hover {
        cursor: pointer;
    }
`;

function Login() {

    return (
        <LoginContainer>
            <Navbar />
            <a target="_self" href={"http://localhost:8001/auth/kakao"}>
                <LoginBtn src="kakao_login_large_wide.png" alt="kakao_login" />
            </a>
        </LoginContainer>
    );
}

export default Login;