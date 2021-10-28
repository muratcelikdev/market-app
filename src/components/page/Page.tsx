import styled from 'styled-components';

import { PageProps } from 'common/interfaces';

const StyledPageContainer = styled.div`
  width: 100%;
  max-width: 1232px;
`;

const Page = ({ children, className }: PageProps): JSX.Element => {
  return <StyledPageContainer className={className}>{children}</StyledPageContainer>;
};

export default Page;
