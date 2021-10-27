import styled from 'styled-components';

interface IPage {
  children?: JSX.Element | JSX.Element[];
  className?: string;
}

const StyledPageContainer = styled.div`
  width: 100%;
  max-width: 1232px;
`;

const Page = ({ children, className }: IPage): JSX.Element => {
  return <StyledPageContainer className={className}>{children}</StyledPageContainer>;
};

export default Page;
