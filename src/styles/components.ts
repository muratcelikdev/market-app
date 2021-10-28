import styled, { css } from 'styled-components';

import Page from 'components/page/Page';

interface IBox {
  flexDirection?: 'row' | 'column';
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
  wrap?: boolean | 'reverse';
  gap?: number;
}

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

export const FlexBox = styled.div(
  ({ flexDirection, alignItems, justifyContent, wrap, gap }: IBox) => css`
    display: flex;
    flex-direction: ${flexDirection || 'row'};
    justify-content: ${justifyContent || 'flex-start'};
    align-items: ${alignItems || 'flex-start'};
    flex-wrap: ${wrap ? 'wrap' : 'no-wrap'};
    gap: ${gap ? `${gap}px` : 0};
  `
);

export const FlexBoxCentered = styled(FlexBox)`
  justify-content: center;
  align-items: center;
`;
