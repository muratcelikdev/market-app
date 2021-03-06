import styled, { css } from 'styled-components';

import * as colors from 'common/colors';
import { CheckboxProps } from 'common/interfaces';

import { FlexBoxCentered } from 'styles/components';

import CheckIcon from 'assets/icons/check.svg';

interface StyledCheckboxProps {
  selected?: boolean;
}

const StyledCheckbox = styled(FlexBoxCentered).attrs({ as: 'button' })(
  ({ selected }: StyledCheckboxProps) => css`
    width: 22px;
    height: 22px;

    background-color: ${selected ? colors.base : colors.white};

    border-radius: 2px;

    box-shadow: 0 1px 7px 0 ${colors.shadow100};

    cursor: pointer;
  `
);

const StyledCheckIcon = styled.img`
  width: 10.7px;
  height: 7.3px;
`;

const Checkbox = ({ value, selected, onSelect }: CheckboxProps): JSX.Element => {
  return (
    <StyledCheckbox selected={selected} onClick={() => onSelect(value)}>
      {selected && <StyledCheckIcon src={CheckIcon} alt="Check Icon" />}
    </StyledCheckbox>
  );
};

export default Checkbox;
