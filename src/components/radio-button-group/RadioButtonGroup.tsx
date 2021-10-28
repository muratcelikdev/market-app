import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { RadioButtonGroupProps, RadioButtonProps } from 'common/interfaces';

import RadioButton from 'components/radio-button/RadioButton';

import { FlexBox } from 'styles/components';

const StyledRadioButtonGroup = styled(FlexBox)``;

const RadioButtonGroup = ({ options, onChange }: RadioButtonGroupProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  useEffect(() => {
    if (selectedOption) {
      onChange(selectedOption);
    }
  }, [selectedOption, onChange]);

  const renderOptions = () =>
    options.map(({ text, value }: RadioButtonProps) => (
      <RadioButton
        text={text}
        onSelect={() => setSelectedOption(value)}
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
