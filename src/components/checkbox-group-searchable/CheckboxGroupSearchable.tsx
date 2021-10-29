import { useState } from 'react';
import styled from 'styled-components';

import * as colors from 'common/colors';
import { CheckboxGroupSearchableProps } from 'common/interfaces';

import CheckboxGroup from 'components/checkbox-group/CheckboxGroup';
import Searchbox from 'components/searchbox/Searchbox';
import Subtitle from 'components/subtitle/Subtitle';

import screens from 'styles/screen';

const StyledCheckboxGroupSearchable = styled.div`
  width: 296px;
  height: 244px;

  padding: 24px 24px 14px;

  background-color: ${colors.white};

  @media ${screens.smallScreen} {
    width: 100%;
  }
`;

const StyledSearchbox = styled(Searchbox)`
  margin-bottom: 17px;
`;

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 12px;
`;

const CheckboxGroupSearchable = ({ title, options, onSelection }: CheckboxGroupSearchableProps) => {
  const [searchText, setSearchText] = useState<string>('');
  const [selectedCheckboxValues, setSelectedCheckboxValues] = useState<any[]>([]);

  const handleSelection = (value) => {
    let selectedValues: any[] = [...selectedCheckboxValues];

    if (selectedCheckboxValues.includes(value)) {
      const indexOfSelectedBrand = selectedValues.indexOf(value);
      selectedValues.splice(indexOfSelectedBrand, 1);
    } else {
      selectedValues = [...selectedCheckboxValues, value];
    }

    setSelectedCheckboxValues(selectedValues);
    onSelection(selectedValues);
  };

  return (
    <>
      <StyledSubtitle text={title} />
      <StyledCheckboxGroupSearchable>
        <StyledSearchbox
          placeholderText="Search brand"
          onSearch={(value: string) => setSearchText(value)}
        />
        <CheckboxGroup
          options={options}
          searchText={searchText}
          onSelect={(value) => handleSelection(value)}
        />
      </StyledCheckboxGroupSearchable>
    </>
  );
};

export default CheckboxGroupSearchable;
