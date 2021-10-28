import styled from 'styled-components';

import * as colors from 'common/colors';
import { ProductProps } from 'common/interfaces';

import ProductImage from 'components/product-image/ProductImage';
import Button from 'components/button/Button';

import screens from 'styles/screen';
import { FlexBoxCentered } from 'styles/components';

const StyledProductContainer = styled(FlexBoxCentered)`
  width: 124px;

  @media ${screens.smallScreen} {
    width: 45%;
    max-width: 250px;
  }
`;

const StyledProductPrice = styled.div`
  align-self: flex-start;

  font-size: 14px;
  font-weight: bold;
  line-height: 1.43;

  color: ${colors.base};

  margin-top: 8px;

  &:before {
    content: '₺';
  }
`;

const StyledProductName = styled.div`
  height: 40px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  color: ${colors.black200};

  margin-bottom: 8px;
`;

const Product = ({ price, productName }: ProductProps): JSX.Element => {
  return (
    <StyledProductContainer flexDirection="column">
      <ProductImage />
      <StyledProductPrice>{price}</StyledProductPrice>
      <StyledProductName>{productName}</StyledProductName>
      <Button text="Add" onClick={() => {}} />
    </StyledProductContainer>
  );
};

export default Product;
