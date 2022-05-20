import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
`;

const Kakao = styled.button`
    color: white;
    background: yellow;
    align-items: center;
    padding: 10px;
    font-size: medium;
`;

const Profile = styled.div`
    display: flex;
    p {
        margin-left: 10px;
        color: white;
        align-items: center;
        vertical-align: middle;
    }
    img {
        width: 40px;
        height: auto;
        border-radius: 25px;
        &:hover {
            cursor: pointer;
        }
    }
`;

function NavbarLogin() {
    const [loginState, setLoginState] = useState(false);
    const [user, setUser] = useState({});

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
        console.log(resData);
        let request = {
            snsId: id,
            nick,
            email,
        };
        axios.post("http://localhost:8001/auth/login", request)
            .catch(function (error) {
                console.log(error);
            });
        request.image = resData.kakao_account.profile.profile_image_url;
        setUser(request);
    }

    function KakaoLogin() {
        if (!window.Kakao.isInitialized()) {
            window.Kakao.init('2d060ab397b864200d0110666e2732ec');
            window.Kakao.Auth.login({
                success: function (response) {
                    window.Kakao.Auth.setAccessToken(response.access_token);
                    console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
                    KakaoUser();
                    setLoginState(true);
                },
                fail: function (error) {
                    console.log(error);
                }
            });
        }
    }

    function KakaoLogout() {
        if (!window.Kakao.Auth.getAccessToken()) {
            console.log('Not logged in.');
            setLoginState(false);
            return;
        }
        window.Kakao.Auth.logout(() => {
            console.log(window.Kakao.Auth.getAccessToken());
            setLoginState(false);
            window.location.reload();
        });
    }

    return (
        <LoginContainer>
            {
                loginState
                    ? <Profile onClick={KakaoLogout}>
                        <p>{user.nick}님 어서오세요</p>
                        <img src={user.image} alt='profile_image' />
                    </Profile>
                    : <Kakao onClick={KakaoLogin}>로그인</Kakao>
            }
        </LoginContainer>
    );
}

export default NavbarLogin;