import { useState, useEffect } from 'react';
import styled from 'styled-components';

import * as colors from 'common/colors';

interface IBasketListItemCounter {
  onCounterChange: (counter: number) => void;
}

const StyledBasketListItemCounter = styled.div`
  display: flex;
`;

const StyledCounterButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

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

const StyledCounterArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 32px;
  height: 32.7px;

  background-color: ${colors.base};
`;

const BasketListItemCounter = ({ onCounterChange }: IBasketListItemCounter): JSX.Element => {
  const [counter, setCounter] = useState<number>(0);

  useEffect(() => {
    onCounterChange(counter);
  }, [counter, onCounterChange]);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1 < 0 ? 0 : counter - 1);
    }
  };

  return (
    <StyledBasketListItemCounter>
      <StyledCounterButton onClick={decreaseCounter}>
        <StyledCounterButtonText>-</StyledCounterButtonText>
      </StyledCounterButton>
      <StyledCounterArea>
        <StyledCounterText>{counter}</StyledCounterText>
      </StyledCounterArea>
      <StyledCounterButton onClick={increaseCounter}>
        <StyledCounterButtonText>+</StyledCounterButtonText>
      </StyledCounterButton>
    </StyledBasketListItemCounter>
  );
};

export default BasketListItemCounter;
