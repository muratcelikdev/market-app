import styled from 'styled-components';

import * as colors from 'common/colors';

import ProductImage from 'components/product-image/ProductImage';
import Button from 'components/button/Button';

interface IProduct {
  price: number;
  productName: string;
}

const StyledProductContainer = styled.div`
  width: 124px;
`;

const StyledProductPrice = styled.div`
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
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  color: ${colors.black200};

  margin-bottom: 8px;
`;

const Product = ({ price, productName }: IProduct): JSX.Element => {
  return (
    <StyledProductContainer>
      <ProductImage />
      <StyledProductPrice>{price}</StyledProductPrice>
      <StyledProductName>{productName}</StyledProductName>
      <Button text="Add" onClick={() => {}} />
    </StyledProductContainer>
  );
};

export default Product;
