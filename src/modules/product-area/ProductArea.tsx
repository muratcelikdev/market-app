import styled from 'styled-components';

import * as colors from 'common/colors';

import Title from 'components/title/Title';
import Product from 'components/product/Product';
import Tags from 'components/tags/Tags';

import { FlexBox } from 'styles/components';

const StyledSection = styled(FlexBox).attrs({ as: 'section' })`
  width: 608px;
`;

const StyledProductsArea = styled(FlexBox)`
  width: 100%;
  max-width: 1008px;

  padding: 22px 20px;

  background-color: ${colors.white};
`;

const StyledTags = styled(Tags)`
  margin: 16px 0;
`;

const ProductArea = () => (
  <StyledSection flexDirection="column">
    <Title text="Products" />
    <StyledTags tags={['mug', 'shirt']} />
    <StyledProductsArea wrap gap={24}>
      {/* TODO: get product data from redux dynamically */}
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
      <Product price={14.99} productName="Gorgeous Office Mug" />
    </StyledProductsArea>
  </StyledSection>
);

export default ProductArea;
