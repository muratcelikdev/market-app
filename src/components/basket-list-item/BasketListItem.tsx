import styled from 'styled-components';

import * as colors from 'common/colors';
import { BasketListItemProps } from 'common/interfaces';

import BasketListItemCounter from 'components/basket-list-item-counter/BasketListItemCounter';

import { FlexBox } from 'styles/components';

const StyledBasketItem = styled(FlexBox)`
  width: 100%;
`;

const StyledProductInfoContainer = styled(FlexBox)``;

const StyledProductText = styled.div`
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.16px;

  color: ${colors.black200};
`;

const StyledProductPrice = styled(StyledProductText)`
  color: ${colors.base};

  &:before {
    content: '₺';
  }
`;

const BasketListItem = ({
  productName,
  price,
  slug,
  products,
  increaseProduct,
  decreaseProduct,
  className,
}: BasketListItemProps): JSX.Element => {
  const { count } = products.find((product) => product.slug === slug);

  return (
    <StyledBasketItem justifyContent="space-between" alignItems="center" className={className}>
      <StyledProductInfoContainer flexDirection="column" gap={2.05}>
        <StyledProductText>{productName}</StyledProductText>
        <StyledProductPrice>{price}</StyledProductPrice>
      </StyledProductInfoContainer>
      <BasketListItemCounter
        onIncrease={() => increaseProduct({ productName, price, slug })}
        onDecrease={() => decreaseProduct(slug)}
        count={count}
      />
    </StyledBasketItem>
  );
};

export default BasketListItem;
