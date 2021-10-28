import { useState, useEffect } from 'react';
import styled from 'styled-components';

import RadioButton from 'components/radio-button/RadioButton';

import { FlexBox } from 'styles/components';

interface IRadioButton {
  text: string;
  value: any;
}

interface IRadioButtonGrouo {
  options: Array<IRadioButton>;
  onChange: (value: any) => void;
}

const StyledRadioButtonGroup = styled(FlexBox)``;

const RadioButtonGroup = ({ options, onChange }: IRadioButtonGrouo): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  useEffect(() => {
    if (selectedOption) {
      onChange(selectedOption);
    }
  }, [selectedOption, onChange]);

  const renderOptions = () =>
    options.map(({ text, value }: IRadioButton) => (
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
