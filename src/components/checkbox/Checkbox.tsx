import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

import * as colors from 'common/colors';

import { FlexBoxCentered } from 'styles/components';

import CheckIcon from 'assets/icons/check.svg';

interface ICheckbox {
  value: any;
  onSelect: (value: any) => void;
}

interface IStyledCheckbox {
  selected?: boolean;
}

const StyledCheckbox = styled(FlexBoxCentered).attrs({ as: 'button' })(
  ({ selected }: IStyledCheckbox) => css`
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

const Checkbox = ({ value, onSelect }: ICheckbox): JSX.Element => {
  const [selected, setSelected] = useState<boolean>(false);

  useEffect(() => {
    onSelect({
      value,
      selected,
    });
  }, [selected, onSelect, value]);

  return (
    <StyledCheckbox selected={selected} onClick={() => setSelected(!selected)}>
      {selected && <StyledCheckIcon src={CheckIcon} alt="Check Icon" />}
    </StyledCheckbox>
  );
};

export default Checkbox;
