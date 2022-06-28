import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Main from '../components/ui/Main';
import Tab from '../components/Tab';
import styled from 'styled-components';
import BasicProvider from '../provider/BasicProvider';
import Footer from '../components/Footer';

const BasicContainer = styled.div`
  background: #111111;
`;

function Challenge() {
  return (
    <BasicContainer>
      <BasicProvider>
        <Info />  
        <Navbar displayLogin={true}/>
        <Main />
        <Tab />
        <Footer />
      </BasicProvider>
    </BasicContainer>
  );
}

export default Challenge;