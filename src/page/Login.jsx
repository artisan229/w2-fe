import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const LoginContainer = styled.div`
    text-align: center;
    img {
        padding: 30px;
    }
`;

function Login() {
    return (
        <LoginContainer>
            <Navbar />
            <Link to={"/"}><img src="kakao_login_large_wide.png" alt="kakao_login" /></Link>
        </LoginContainer>
    );
}

export default Login;