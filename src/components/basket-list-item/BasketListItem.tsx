import styled from 'styled-components';

import * as colors from 'common/colors';

import BasketListItemCounter from 'components/basket-list-item-counter/BasketListItemCounter';

interface IBasketListItem {
  productName: string;
  price: number;
  className?: string;
}

const StyledBasketItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const StyledProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.05px;
`;

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
    <StyledBasketItem className={className}>
      <StyledProductInfoContainer>
        <StyledProductText>{productName}</StyledProductText>
        <StyledProductPrice>{price}</StyledProductPrice>
      </StyledProductInfoContainer>
      <BasketListItemCounter onCounterChange={handleCounterChange} />
    </StyledBasketItem>
  );
};

export default BasketListItem;
