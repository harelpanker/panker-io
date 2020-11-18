import Navbar from './navigation/Navbar';
import Footer from './Footer';
import FloatingIcons from './FloatingIcons';

import styled from 'styled-components';

const Layout = ({ children }) => {
  return (
    <FlexWrapper>
      <Content>
        <Navbar />
        {children}
        <FloatingIcons />
      </Content>
      <Footer />
    </FlexWrapper>
  );
};

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100vw;
  overflow: hidden;
`;
const Content = styled.div`
  flex-grow: 1;
`;

export default Layout;
