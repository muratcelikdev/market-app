import { useState, useMemo, useEffect } from 'react';
import styled, { css } from 'styled-components';

import { PaginationProps } from 'common/interfaces';
import * as colors from 'common/colors';

import PaginationButton from 'components/pagination-button/PaginationButton';

import { FlexBox, FlexBoxCentered } from 'styles/components';
import screens from 'styles/screen';

const SIBLING_COUNT = 4;
const DOTS = '...';

interface StyledPaginationPageButtonProps {
  active?: boolean;
}

interface StyledPaginationButtonProps {
  marginLeft?: boolean;
  marginRight?: boolean;
}

const StyledPagination = styled(FlexBox)`
  align-self: center;

  overflow: hidden;

  @media ${screens.smallScreen} {
    width: 100%;
  }
`;

const StyledPaginationPageButton = styled(FlexBoxCentered).attrs({ as: 'button' })(
  ({ active }: StyledPaginationPageButtonProps) => css`
    width: 32px;
    height: 40px;

    margin: 0 2px;

    font-size: 14px;
    font-weight: 600;

    color: ${active ? colors.white : colors.black100};

    background-color: ${active ? colors.base : colors.grey50};

    border-radius: 2px;

    cursor: pointer;

    &:hover {
      color: ${!active && colors.base};
    }
  `
);

const StyledPaginationButton = styled(PaginationButton)(
  ({ marginLeft, marginRight }: StyledPaginationButtonProps) => css`
    margin-left: ${marginLeft ? '56px' : '0'};
    margin-right: ${marginRight ? '56px' : '0'};

    @media ${screens.smallScreen} {
      display: none;
    }
  `
);

const Pagination = ({ pageCount, onPageChange }: PaginationProps): JSX.Element => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  useEffect(() => {
    onPageChange(currentPageIndex);
  }, [currentPageIndex, onPageChange]);

  const paginationButtons = useMemo(() => {
    const buttons: JSX.Element[] = [];
    let pages: Array<number | string> = [];

    // NOTE: algorithm must be improved
    if (currentPageIndex - SIBLING_COUNT + 1 < 0 || currentPageIndex + SIBLING_COUNT >= pageCount) {
      pages = [1, 2, 3, 4, DOTS, pageCount - 3, pageCount - 2, pageCount - 1, pageCount];
    } else {
      pages = [
        1,
        DOTS,
        currentPageIndex - 1,
        currentPageIndex,
        currentPageIndex + 1,
        currentPageIndex + 2,
        currentPageIndex + 3,
        DOTS,
        pageCount,
      ];
    }

    for (let i = 0; i < pages.length; i++) {
      buttons.push(
        <StyledPaginationPageButton
          onClick={() => handlePageChange(pages[i])}
          active={currentPageIndex + 1 === pages[i]}
        >
          {pages[i] === DOTS ? DOTS : pages[i]}
        </StyledPaginationPageButton>
      );
    }

    const handlePageChange = (pageNumber) => {
      if (pageNumber !== DOTS) {
        setCurrentPageIndex(pageNumber - 1);
      }
    };

    return buttons;
  }, [pageCount, currentPageIndex]);

  return (
    <StyledPagination>
      <StyledPaginationButton
        type="Prev"
        onClick={() => setCurrentPageIndex(currentPageIndex - 1 < 0 ? 0 : currentPageIndex - 1)}
        marginRight
      />
      {paginationButtons}
      <StyledPaginationButton
        type="Next"
        onClick={() =>
          setCurrentPageIndex(
            currentPageIndex + 1 > pageCount - 1 ? pageCount - 1 : currentPageIndex + 1
          )
        }
        marginLeft
      />
    </StyledPagination>
  );
};

export default Pagination;
