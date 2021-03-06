import styled from 'styled-components';

import * as colors from 'common/colors';
import { CheckboxItemProps } from 'common/interfaces';

import Checkbox from 'components/checkbox/Checkbox';

import { FlexBox } from 'styles/components';

const StyledCheckboxItemContainer = styled(FlexBox)``;

const StyledCheckboxContent = styled(StyledCheckboxItemContainer)`
  margin-left: 8px;
`;

const StyledCheckboxText = styled.div`
  margin-right: 4px;

  font-size: 14px;
  line-height: 1.29;
  letter-spacing: 0.16px;

  color: ${colors.grey500};
`;

const StyledCheckboxInfo = styled(StyledCheckboxText)`
  margin: 0;

  color: ${colors.grey460};

  &:before {
    content: '(';
  }

  &:after {
    content: ')';
  }
`;

const CheckboxItem = ({
  value,
  text,
  info,
  selected,
  onSelect,
}: CheckboxItemProps): JSX.Element => {
  return (
    <StyledCheckboxItemContainer alignItems="center">
      <Checkbox onSelect={onSelect} value={value} selected={selected} />
      <StyledCheckboxContent>
        <StyledCheckboxText>{text}</StyledCheckboxText>
        <StyledCheckboxInfo>{info}</StyledCheckboxInfo>
      </StyledCheckboxContent>
    </StyledCheckboxItemContainer>
  );
};

export default CheckboxItem;
