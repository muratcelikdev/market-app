import styled from 'styled-components';

import Page from 'components/page/Page';

export const AppLayout = styled.main`
  display: flex;
  justify-content: center;

  margin-top: 38.4px;
`;

export const MainPageLayout = styled(Page)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FilterColumn = styled.section`
  & > * {
    margin-bottom: 24px;
  }
`;
