import { useState, useEffect } from 'react';
import styled from 'styled-components';

import RadioButton from 'components/radio-button/RadioButton';

interface IRadioButton {
  text: string;
  value: any;
}

interface IRadioButtonGrouo {
  options: Array<IRadioButton>;
  onChange: (value: any) => void;
}

const StyledRadioButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

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

  return <StyledRadioButtonGroup>{renderOptions()}</StyledRadioButtonGroup>;
};

export default RadioButtonGroup;
