import styled, { css } from 'styled-components';

import * as colors from 'common/colors';

interface ITag {
  text: string;
  active?: boolean;
  onSelect: () => void;
}

interface IStyledTag {
  active?: boolean;
}

const StyledTag = styled.button(
  ({ active }: IStyledTag) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    min-width: 61px;
    height: 30px;

    padding: 6px 16px;

    background-color: ${active ? colors.base : colors.lightPink};

    border-radius: 2px;

    cursor: pointer;
  `
);

const StyledTagText = styled.div(
  ({ active }: IStyledTag) => css`
    font-size: 13px;
    font-weight: 600;
    line-height: 1.38;

    color: ${active ? colors.lightPink : colors.base};
  `
);

const Tag = ({ text, active, onSelect }: ITag): JSX.Element => {
  return (
    <StyledTag active={active} onClick={onSelect}>
      <StyledTagText active={active}>{text}</StyledTagText>
    </StyledTag>
  );
};

export default Tag;
