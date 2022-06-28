import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import { changeUser, changeState } from "../store";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
    margin: 0px auto;
    height: 80vh;
    background-color: white;
    display: flex;
    align-items: center;
    max-width: 1000px;
`;

const Wrap = styled.div`
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 48px;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Welcome = styled.div`
    padding: 30px;
    margin: 10px;
`;

const LoginImg = styled.img`
    &:hover {
        cursor: pointer;
    }
`;

function Login() {
    const loginState = useSelector((state) => state.login);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('user') !== null && loginState === false) {
            let user = JSON.parse(localStorage.getItem('user'));
            dispatch(changeUser({ name: user.nick, email: user.email, profile_img: user.profile_img }));
            dispatch(changeState());
        }
    }, [])

    function KakaoUser() {
        window.Kakao.API.request({
            url: '/v2/user/me',
            success: function (response) {
                UserHandler(response);
            },
            fail: function (error) {
                console.log(error);
            }
        });
    }

    function UserHandler(resData) {
        const id = resData.id;
        const email = resData.kakao_account.email;
        const nick = resData.kakao_account.profile.nickname;
        const profile_img = resData.properties.profile_image;
        // console.log(resData);
        // console.log(profile_img);
        let request = {
            snsId: id,
            nick,
            email,
        };
        let user = {
            nick,
            email,
            profile_img
        }
        process.env.NODE_ENV === 'production'
            ? axios.post(process.env.REACT_APP_SERVER_HOST + "/auth/login", request)
                .catch(function (error) {
                    console.log(error);
                })
            : axios.post("http://localhost:8001/auth/login", request)
                .catch(function (error) {
                    console.log(error);
                });
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(changeUser({ name: nick, email: email, profile_img: profile_img }));
    }

    function KakaoLogin() {
        if (localStorage.getItem('user') !== null) {
            let user = localStorage.getItem('user');
            dispatch(changeUser({ name: user.nick, email: user.email, profile_img: user.profile_img }));
            dispatch(changeState());
        } else if (!window.Kakao.isInitialized()) {
            window.Kakao.init('2d060ab397b864200d0110666e2732ec');
            window.Kakao.Auth.login({
                success: function (response) {
                    window.Kakao.Auth.setAccessToken(response.access_token);
                    // console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
                    KakaoUser();
                    dispatch(changeState());
                },
                fail: function (error) {
                    console.log(error);
                }
            });
        } else {
            window.Kakao.Auth.login({
                success: function (response) {
                    window.Kakao.Auth.setAccessToken(response.access_token);
                    // console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
                    KakaoUser();
                    dispatch(changeState());
                },
                fail: function (error) {
                    console.log(error);
                }
            });
        }
    }
    return (
        <>
            <Navbar displayLogin={false} />
            <LoginContainer>
                <Wrap>
                    <Welcome>
                        <h1>환영합니다!</h1>
                        <LoginImg src="kakao_login.png" onClick={()=>{
                            KakaoLogin();
                            navigate('/');
                        }} />
                        <p>새로운 영화 시장을 만들어가는 차세대 OTT 서비스 윌리우드입니다.</p>
                    </Welcome>
                    <div>
                        <img style={{width: '50%'}} src="camera.jpg" alt="camera.jpg" />
                    </div>
                </Wrap>
            </LoginContainer>
            <Footer />
        </>
    )
}

export default Login;