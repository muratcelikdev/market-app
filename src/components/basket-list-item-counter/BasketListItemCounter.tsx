import styled from 'styled-components';

import * as colors from 'common/colors';
import { BasketListItemCounterProps } from 'common/interfaces';

import { FlexBox, FlexBoxCentered } from 'styles/components';

const StyledBasketListItemCounter = styled(FlexBox)``;

const StyledCounterButton = styled(FlexBoxCentered).attrs({ as: 'button' })`
  width: 32px;
  height: 32.7px;

  background-color: ${colors.white};

  cursor: pointer;
`;

const StyledCounterText = styled.div`
  font-size: 15px;
  font-weight: bold;

  color: ${colors.white};
`;

const StyledCounterButtonText = styled(StyledCounterText)`
  color: ${colors.base};
`;

const StyledCounterArea = styled(FlexBoxCentered)`
  width: 32px;
  height: 32.7px;

  background-color: ${colors.base};
`;

const BasketListItemCounter = ({
  onIncrease,
  onDecrease,
  count,
}: BasketListItemCounterProps): JSX.Element => {
  const increaseCounter = () => {
    onIncrease();
  };

  const decreaseCounter = () => {
    onDecrease();
  };

  return (
    <StyledBasketListItemCounter>
      <StyledCounterButton onClick={decreaseCounter}>
        <StyledCounterButtonText>-</StyledCounterButtonText>
      </StyledCounterButton>
      <StyledCounterArea>
        <StyledCounterText>{count}</StyledCounterText>
      </StyledCounterArea>
      <StyledCounterButton onClick={increaseCounter}>
        <StyledCounterButtonText>+</StyledCounterButtonText>
      </StyledCounterButton>
    </StyledBasketListItemCounter>
  );
};

export default BasketListItemCounter;
