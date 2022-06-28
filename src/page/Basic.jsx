import Info from '../components/Info';
import Navbar from '../components/Navbar';
import Main from '../components/ui/Main';
import Tab from '../components/Tab';
import styled from 'styled-components';
import BasicProvider from '../provider/BasicProvider';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

const BasicContainer = styled.div`
  background: #111111;
`;

function Basic() {
  return (
    <BasicContainer>
      <BasicProvider>
        <Outlet />
        <Navbar displayLogin={true} />
        <Main />
        <Tab />
        <Footer />
      </BasicProvider>
    </BasicContainer>
  );
}

export default Basic;