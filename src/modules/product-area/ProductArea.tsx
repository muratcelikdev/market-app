import styled from 'styled-components';

import * as colors from 'common/colors';

import Title from 'components/title/Title';
import Product from 'components/product/Product';
import Tags from 'components/tags/Tags';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 608px;
`;

const StyledProductsArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;

  width: 100%;
  max-width: 1008px;

  padding: 22px 20px;

  background-color: ${colors.white};
`;

const StyledTags = styled(Tags)`
  margin: 16px 0;
`;

const ProductArea = () => (
  <StyledSection>
    <Title text="Products" />
    <StyledTags tags={['mug', 'shirt']} />
    <StyledProductsArea>
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
