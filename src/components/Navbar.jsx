import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 55px;
  background: #2b2b2b;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  z-index: 3;
  img {
    height: 24px;
  }
  button {
    border: none;
    background: #2b2b2b;
    &:hover {
      cursor: pointer;
    }
  }
  Link, a {
    color: white;
    text-decoration: none;
  }
  Link, a:visited {
    color: white;
  }
`;

const NavbarLeft = styled.div`
  align-items: center;
`;

const Logo = styled.img`
  margin: 10px;
  vertical-align: middle;
`;

const NavbarCenter = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 10px;
  }
`;

const Menu = styled.p`
  color: ${props => props.color};
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  p {
    margin: 5px;
    align-items: center;
  }
`;

const NavbarLogin = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;

function Navbar() {
  return (
    <NavbarContainer>
      <IconContext.Provider value={{ color: 'white', size: '30px' }}>
        <NavbarLeft>
          <Link to={"/"}><Logo src='willywood_white.png' /></Link>
        </NavbarLeft>
        <NavbarCenter>
          <Link to={"/premium"}><Menu color='#f2e056'>프리미엄관</Menu></Link>
          <Link to={"/category"}><Menu>카테고리</Menu></Link>
          <Link to={"/upload"}><Menu>작품 업로드</Menu></Link>
          <Link to={"/mypage"}><Menu>마이페이지</Menu></Link>
          <Link to={"/support"}><Menu>고객센터</Menu></Link>
          <a target="_blank" rel="noopener noreferrer" href={"http://www.joodra.com/"}>We will go Hollywood</a>
        </NavbarCenter>
        <NavbarRight>
          <NavbarLogin>
            <Link to={"/login"}><p>로그인</p></Link>
            <Link to={"/signup"}><p>회원가입</p></Link>
          </NavbarLogin>
        </NavbarRight>
      </IconContext.Provider>
    </NavbarContainer>
  );
}

export default Navbar;