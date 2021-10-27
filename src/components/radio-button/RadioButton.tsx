import styled, { css } from 'styled-components';

import * as colors from 'common/colors';

import BlueCheckIcon from 'assets/icons/blue-check.svg';

interface IRadioButton {
  checked?: boolean;
  text: string;
  onSelect: () => void;
}

interface IStyledRadioButton {
  checked?: boolean;
}

const StyledRadioButtonContainer = styled.button`
  display: flex;
  align-items: center;

  cursor: pointer;
`;

const StyledRadioButton = styled.div(
  ({ checked }: IStyledRadioButton) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 22px;
    height: 22px;

    border-radius: 50%;

    border: 2px solid ${checked ? colors.base : colors.grey200};
  `
);

const StyledRadioButtonCheck = styled.img``;

const StyledRadioButtonText = styled.div`
  margin-left: 12px;

  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.16px;

  color: ${colors.grey500};
`;

const RadioButton = ({ checked, text, onSelect }: IRadioButton): JSX.Element => {
  const handleRadioButtonClick = () => {
    onSelect();
  };

  return (
    <StyledRadioButtonContainer onClick={handleRadioButtonClick}>
      <StyledRadioButton checked={checked}>
        {checked && <StyledRadioButtonCheck src={BlueCheckIcon} alt="Blue Check Icon" />}
      </StyledRadioButton>
      <StyledRadioButtonText>{text}</StyledRadioButtonText>
    </StyledRadioButtonContainer>
  );
};

export default RadioButton;
