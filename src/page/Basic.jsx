import Navbar from '../components/Navbar';
import Main from '../components/ui/Main';
import Search from '../components/Search';
import ReleaseSoon from '../components/ReleaseSoon';
import Recommend from '../components/Recommend';
import NewContents from '../components/NewContents';
import Magazine from '../components/Magazine';
import Imminent from '../components/Imminent';
import styled from 'styled-components';

const BasicContainer = styled.div`
  background: black;
`;

const IndexContainer = styled.div`
  hr {
    border: 0;
    width: 60%;
    height: 4px;
    background: #262626;
  }
`;

const IndexTab = styled.div`
  width: 60%;
  color: white;
  display: flex;
  justify-content: space-around;
  p {
    margin: 0;
    &:hover {
      cursor: pointer;
    }
  }
`;

function Challenge() {
  return (
    <BasicContainer>
      <Navbar />
      <Main />
      <Search />
      <Index />
      <NewContents />
      <ReleaseSoon />
      <Recommend />
      <Magazine />
      <Imminent />
    </BasicContainer>
  );
}

function Index() {
  return (
    <IndexContainer>
      <hr />
      <IndexTab>
        <p>새로 올라온 작품</p>
        <p>펀딩 성공한 작품</p>
        <p>오늘의 추천 카테고리</p>
        <p>Magazine</p>
        <p>프리미엄 입관 직전 작품</p>
      </IndexTab>
    </IndexContainer>
  );
}

export default Challenge;