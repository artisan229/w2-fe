import styled from 'styled-components';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { changeState, changeUser } from '../../store';

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
    height: 50px;
    margin-top: auto;
    margin-bottom: auto;
    display: flex;
    span {
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 10px;
        color: white;
    }
    img {
        margin-top: auto;
        margin-bottom: auto;
        width: 35px;
        height: 35px;
        border-radius: 25px;
        object-fit: cover;
        &:hover {
            cursor: pointer;
        }
    }
`;

const Logout = styled.button`
    color: white;
    background: yellow;
    align-items: center;
    padding: 10px;
    font-size: medium;
`;

function NavbarLogin() {
    const loginState = useSelector((state) => state.login);
    const userState = useSelector((state) => state.user);
    const dispatch = useDispatch();

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
        process.env.NODE_ENV === 'production'
            ? axios.post(process.env.REACT_APP_SERVER_HOST + "/auth/login", request)
                .catch(function (error) {
                    console.log(error);
                })
            : axios.post("http://localhost:8001/auth/login", request)
                .catch(function (error) {
                    console.log(error);
                });
        dispatch(changeUser({ name: nick, email: email, profile_img: profile_img }));
    }

    function KakaoLogin() {
        if (!window.Kakao.isInitialized()) {
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
        }
    }

    function KakaoLogout() {
        if (!window.Kakao.Auth.getAccessToken()) {
            console.log('Not logged in.');
            return;
        }
        window.Kakao.Auth.logout(() => {
            console.log(window.Kakao.Auth.getAccessToken());
            dispatch(changeState());
            window.location.reload();
        });
    }

    return (
        <LoginContainer>
            {
                loginState
                    ? <>
                        <Profile>
                            <span>{userState.value.name}님 어서오세요</span>
                            {/* <img src={userState.value.profile_img} alt='profile_image' /> */}
                        </Profile>
                        <Logout onClick={KakaoLogout}>로그아웃</Logout>
                    </>
                    : <Kakao onClick={KakaoLogin}>로그인</Kakao>
            }
        </LoginContainer>
    );
}

export default NavbarLogin;