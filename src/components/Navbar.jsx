import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NavbarLogin from './ui/NavbarLogin';
import { useMediaQuery } from 'react-responsive';

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
  a {
    color: white;
    text-decoration: none;
  }
  a:visited {
    color: white;
  }
  @media screen and (max-width: 768px) {
    height: 44px;
    img {
      height: 18px;
    }
  }
`;

const NavbarLeft = styled.div`
  align-items: center;
`;

const Logo = styled.img`
  margin: 10px;
  vertical-align: middle;
  &:hover{
    cursor: pointer;
  }
`;

const NavbarCenter = styled.div`
  display: flex;
  align-items: center;
  p {
    margin: 10px;
  }
  @media screen and (max-width: 768px){
    align-self: center;
  }
`;

// const Menu = styled.p`
//   color: ${props => props.color};
// `;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    margin: 5px;
    align-items: center;
  }
`;

function Navbar(props) {
  const isMobile = useMediaQuery({
    query: '(max-width: 768px)',
  });
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      {
        isMobile
          ? <>
            <NavbarLeft>
              <Logo src='willywood_white.png' onClick={() => window.location.pathname === "/" ? navigate(0) : navigate(-1)} />
            </NavbarLeft>
            <NavbarCenter>
            </NavbarCenter>
            <NavbarRight>
              <NavbarLogin />
            </NavbarRight>
          </>
          : <>
            <NavbarLeft>
              <Logo src='willywood_white.png' onClick={() => window.location.pathname === "/" ? navigate(0) : navigate(-1)} />
            </NavbarLeft>
            {/* <NavbarCenter>
          <Link to={"/premium"}><Menu color='#f2e056'>프리미엄관</Menu></Link>
          <Link to={"/category"}><Menu>카테고리</Menu></Link>
          <Link to={"/upload"}><Menu>작품 업로드</Menu></Link>
          <Link to={"/mypage"}><Menu>마이페이지</Menu></Link>
          <Link to={"/support"}><Menu>고객센터</Menu></Link>
          <a target="_blank" rel="noopener noreferrer" href={"http://www.joodra.com/"}>We will go Hollywood</a>
        </NavbarCenter> */}
            <NavbarRight>
              {
                props.displayLogin
                ? <NavbarLogin />
                : null
              }
            </NavbarRight>
          </>
      }
    </NavbarContainer>
  );
}

export default Navbar;