import Navbar from '../components/Navbar';
import Main from '../components/ui/Main';
import Search from '../components/Search';
import ReleaseSoon from '../components/ReleaseSoon';
import Recommend from '../components/Recommend';
import styled from 'styled-components';
import NewContents from '../components/NewContents';

const ChallengeContainer = styled.div`
  background: black;
`;

function Challenge() {
  return (
    <ChallengeContainer>
      <Navbar />
      <Main />
      <Search />
      <NewContents />
      <ReleaseSoon />
      <Recommend />
    </ChallengeContainer>
  );
}

export default Challenge;