import { useState } from 'react';
import styled from 'styled-components';

import { RadioButtonGroupProps, RadioButtonProps } from 'common/interfaces';

import RadioButton from 'components/radio-button/RadioButton';

import { FlexBox } from 'styles/components';

const StyledRadioButtonGroup = styled(FlexBox)``;

const RadioButtonGroup = ({
  options,
  selectedOption,
  onChange,
}: RadioButtonGroupProps): JSX.Element => {
  const renderOptions = () =>
    options.map(({ text, value }: RadioButtonProps) => (
      <RadioButton
        text={text}
        onSelect={() => onChange(value)}
        checked={value === selectedOption}
      />
    ));

  return (
    <StyledRadioButtonGroup flexDirection="column" gap={12}>
      {renderOptions()}
    </StyledRadioButtonGroup>
  );
};

export default RadioButtonGroup;
