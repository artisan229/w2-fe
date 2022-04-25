import Navbar from '../components/Navbar';
import Main from '../components/ui/Main';
import Search from '../components/Search';
import Contents from '../components/NewContents';
import styled from 'styled-components';

const BasicContainer = styled.div`
  background: black;
`;

function Challenge() {
  return (
    <BasicContainer>
      <Navbar />
      <Main />
      <Search />
      <Contents />
    </BasicContainer>
  );
}

export default Challenge;