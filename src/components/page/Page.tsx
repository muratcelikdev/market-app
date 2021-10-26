import styled from 'styled-components';

const StyledPageContainer = styled.div`
  width: 100%;
  max-width: 1440px;
`;

const Page = ({ children }): JSX.Element => {
  return <StyledPageContainer>{children}</StyledPageContainer>;
};

export default Page;
