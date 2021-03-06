import styled from 'styled-components';

import * as colors from 'common/colors';
import { BasketTotalAmountProps } from 'common/interfaces';

import { FlexBoxCentered } from 'styles/components';

const StyledBasketTotalAmount = styled(FlexBoxCentered)`
  width: 92px;
  height: 51.1px;

  padding: 17.4px 24px;

  background-color: ${colors.white};

  border: 2px solid ${colors.base};
`;

const StyledBasketTotalAmountText = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.14;

  color: ${colors.base};

  &:before {
    content: '₺';
  }
`;

const BasketTotalAmount = ({ totalAmount, className }: BasketTotalAmountProps): JSX.Element => {
  return (
    <StyledBasketTotalAmount className={className}>
      <StyledBasketTotalAmountText>{totalAmount.toFixed(2)}</StyledBasketTotalAmountText>
    </StyledBasketTotalAmount>
  );
};

export default BasketTotalAmount;
