import styled from 'styled-components';

import * as colors from 'common/colors';

interface IBasketTotalAmount {
  className?: string;
}

const StyledBasketTotalAmount = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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

const BasketTotalAmount = ({ className }: IBasketTotalAmount): JSX.Element => {
  return (
    <StyledBasketTotalAmount className={className}>
      {/* TODO: get data from redux */}
      <StyledBasketTotalAmountText>39.97</StyledBasketTotalAmountText>
    </StyledBasketTotalAmount>
  );
};

export default BasketTotalAmount;
