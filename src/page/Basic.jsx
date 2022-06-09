import Navbar from '../components/Navbar';
import Main from '../components/ui/Main';
import Search from '../components/Search';
import Tab from '../components/Tab';
import styled from 'styled-components';
import BasicProvider from '../provider/BasicProvider';

const BasicContainer = styled.div`
  background: black;
`;

function Challenge() {
  return (
    <BasicContainer>
      <BasicProvider>
        <Navbar />
        <Main />
        <Search />
        <Tab />
      </BasicProvider>
    </BasicContainer>
  );
}

export default Challenge;