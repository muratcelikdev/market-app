import styled from 'styled-components';

import * as colors from 'common/colors';

import { FlexBoxCentered } from 'styles/components';

interface IButton {
  text: string;
  onClick: () => void;
}

const StyledButton = styled(FlexBoxCentered).attrs({ as: 'button' })`
  width: 124px;
  height: 22px;

  background-color: ${colors.base};

  border-radius: 2px;

  cursor: pointer;
`;

const StyledButtonText = styled.div`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.67;

  color: ${colors.white};
`;

const Button = ({ text, onClick }: IButton): JSX.Element => {
  return (
    <StyledButton onClick={onClick}>
      <StyledButtonText>{text}</StyledButtonText>
    </StyledButton>
  );
};

export default Button;
