import styled from 'styled-components';

import * as colors from 'common/colors';

import BasketIcon from 'assets/icons/basket.svg';

interface IBasket {
  price: number;
}

const StyledBasketButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 129px;
  height: 76.6px;

  padding: 25px;

  background-color: ${colors.baseDark};
`;

const StyledPriceText = styled.span`
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.16px;

  color: ${colors.white};

  &:before {
    content: '₺';

    margin-right: 4px;
  }
`;

const StyledIcon = styled.img`
  width: 13.2px;
  height: 16.4px;

  margin-right: 13.4px;
`;

const Basket = ({ price }: IBasket): JSX.Element => {
  return (
    <StyledBasketButton>
      <StyledIcon src={BasketIcon} alt="Basket Icon" />
      <StyledPriceText>{price}</StyledPriceText>
    </StyledBasketButton>
  );
};

export default Basket;
