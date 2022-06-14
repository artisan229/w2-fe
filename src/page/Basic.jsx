import Navbar from '../components/Navbar';
import Main from '../components/ui/Main';
import Tab from '../components/Tab';
import styled from 'styled-components';
import BasicProvider from '../provider/BasicProvider';
import Footer from '../components/Footer';

const BasicContainer = styled.div`
  background: black;
`;

function Challenge() {
  return (
    <BasicContainer>
      <BasicProvider>
        <Navbar />
        <Main />
        <Tab />
        <Footer />
      </BasicProvider>
    </BasicContainer>
  );
}

export default Challenge;