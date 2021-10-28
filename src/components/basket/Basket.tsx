import styled from 'styled-components';

import * as colors from 'common/colors';
import { BasketProps } from 'common/interfaces';

import { FlexBoxCentered } from 'styles/components';
import screens from 'styles/screen';

import BasketIcon from 'assets/icons/basket.svg';

const StyledBasketButton = styled(FlexBoxCentered).attrs({ as: 'button' })`
  width: 129px;
  height: 76.6px;

  padding: 25px;

  background-color: ${colors.baseDark};

  @media ${screens.smallScreen} {
    height: 35px;
  }
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

const Basket = ({ price }: BasketProps): JSX.Element => {
  return (
    <StyledBasketButton>
      <StyledIcon src={BasketIcon} alt="Basket Icon" />
      <StyledPriceText>{price}</StyledPriceText>
    </StyledBasketButton>
  );
};

export default Basket;
