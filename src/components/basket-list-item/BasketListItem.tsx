import styled from 'styled-components';

import * as colors from 'common/colors';

import BasketListItemCounter from 'components/basket-list-item-counter/BasketListItemCounter';

import { FlexBox } from 'styles/components';

interface IBasketListItem {
  productName: string;
  price: number;
  className?: string;
}

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

const BasketListItem = ({ productName, price, className }: IBasketListItem): JSX.Element => {
  const handleCounterChange = (counter: number) => {
    // TODO: handle counter change logic
  };

  return (
    <StyledBasketItem justifyContent="space-between" alignItems="center" className={className}>
      <StyledProductInfoContainer flexDirection="column" gap={2.05}>
        <StyledProductText>{productName}</StyledProductText>
        <StyledProductPrice>{price}</StyledProductPrice>
      </StyledProductInfoContainer>
      <BasketListItemCounter onCounterChange={handleCounterChange} />
    </StyledBasketItem>
  );
};

export default BasketListItem;
