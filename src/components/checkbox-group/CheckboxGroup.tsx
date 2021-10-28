import styled from 'styled-components';

import CheckboxItem from 'components/checkbox-item/CheckboxItem';

import { FlexBox } from 'styles/components';

interface ICheckboxGroupItem {
  value: any;
  text: string;
  info: number | string;
}

interface ICheckboxGroup {
  options: Array<ICheckboxGroupItem>;
  searchText: string;
}

const StyledCheckboxGroupContainer = styled(FlexBox)`
  max-height: 130px;

  padding: 4px;

  overflow-y: scroll;
`;

const CheckboxGroup = ({ options, searchText }: ICheckboxGroup): JSX.Element => {
  const handleSelect = (selection) => {
    //   TODO: implement selection logic
  };

  const renderOptions = () => {
    const optionsToRender: typeof options =
      searchText.length === 0
        ? options
        : options.filter(({ text }) => {
            console.log({ text, searchText });

            return text.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
          });

    return optionsToRender.map(({ value, text, info }, index) => (
      <CheckboxItem
        key={index}
        value={value}
        text={text}
        info={info}
        onSelect={(selection) => handleSelect(selection)}
      />
    ));
  };

  return (
    <StyledCheckboxGroupContainer flexDirection="column" gap={14}>
      {renderOptions()}
    </StyledCheckboxGroupContainer>
  );
};

export default CheckboxGroup;
