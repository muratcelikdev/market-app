import styled, { css } from 'styled-components';

import Page from 'components/page/Page';

import screens from 'styles/screen';

interface FlexBoxProps {
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

  @media ${screens.smallScreen} {
    flex-direction: column;
    justify-content: center;
  }
`;

export const FlexBox = styled.div(
  ({ flexDirection, alignItems, justifyContent, wrap, gap }: FlexBoxProps) => css`
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

export const FilterColumn = styled(FlexBox)`
  & > * {
    margin-bottom: 24px;
  }

  @media ${screens.smallScreen} {
    display: none;
  }
`;
