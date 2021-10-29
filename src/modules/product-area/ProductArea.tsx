import { useState } from 'react';
import styled from 'styled-components';

import * as colors from 'common/colors';

import Title from 'components/title/Title';
import Product from 'components/product/Product';
import Tags from 'components/tags/Tags';
import Pagination from 'components/pagination/Pagination';

import { FlexBox } from 'styles/components';
import screens from 'styles/screen';

const StyledSection = styled(FlexBox).attrs({ as: 'section' })`
  width: 608px;

  @media ${screens.smallScreen} {
    width: 100%;

    padding: 16px;
  }
`;

const StyledProductsArea = styled(FlexBox)`
  width: 100%;
  max-width: 1008px;

  padding: 22px 20px;

  background-color: ${colors.white};

  @media ${screens.smallScreen} {
    justify-content: space-between;
  }
`;

const StyledTags = styled(Tags)`
  margin: 16px 0;
`;

const ProductArea = ({ pages, itemTypes }) => {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);

  return (
    <StyledSection flexDirection="column">
      <Title text="Products" />
      <StyledTags tags={itemTypes} />
      <StyledProductsArea wrap gap={24}>
        {pages.length > 0 &&
          pages[currentPageIndex].map(({ name, price }, index) => (
            <Product price={price} productName={name} key={index} />
          ))}
      </StyledProductsArea>
      <Pagination
        pageCount={pages.length}
        onPageChange={(pageIndex: number) => setCurrentPageIndex(pageIndex)}
      />
    </StyledSection>
  );
};

export default ProductArea;
