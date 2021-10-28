import styled, { css } from 'styled-components';

import * as colors from 'common/colors';
import { TagProps } from 'common/interfaces';

import { FlexBoxCentered } from 'styles/components';

interface StyledTagProps {
  active?: boolean;
}

const StyledTag = styled(FlexBoxCentered).attrs({ as: 'button' })(
  ({ active }: StyledTagProps) => css`
    min-width: 61px;
    height: 30px;

    padding: 6px 16px;

    background-color: ${active ? colors.base : colors.lightPink};

    border-radius: 2px;

    cursor: pointer;
  `
);

const StyledTagText = styled.div(
  ({ active }: StyledTagProps) => css`
    font-size: 13px;
    font-weight: 600;
    line-height: 1.38;

    color: ${active ? colors.lightPink : colors.base};
  `
);

const Tag = ({ text, active, onSelect }: TagProps): JSX.Element => {
  return (
    <StyledTag active={active} onClick={onSelect}>
      <StyledTagText active={active}>{text}</StyledTagText>
    </StyledTag>
  );
};

export default Tag;
