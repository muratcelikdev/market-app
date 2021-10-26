import styled from 'styled-components';

import * as colors from 'common/colors';

import Basket from 'components/basket/Basket';
import Page from 'components/page/Page';

import Logo from 'assets/icons/logo.svg';

const StyledNavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 76.6px;

  background-color: ${colors.base};
`;

const StyledNavbar = styled.nav`
  position: relative;

  display: flex;
  justify-content: flex-end;
`;

const StyledLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 141.3px;
  height: 40.3px;

  transform: translate(-50%, -50%);
`;

const Navbar = (): JSX.Element => {
  return (
    <StyledNavbarContainer>
      <Page>
        <StyledNavbar>
          <StyledLogo src={Logo} alt="logo" />
          <Basket price={39.97} />
        </StyledNavbar>
      </Page>
    </StyledNavbarContainer>
  );
};

export default Navbar;
