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

const CheckboxGroupSearchable = ({ title, options }: CheckboxGroupSearchableProps) => {
  const [searchText, setSearchText] = useState<string>('');

  return (
    <>
      <StyledSubtitle text={title} />
      <StyledCheckboxGroupSearchable>
        <StyledSearchbox
          placeholderText="Search brand"
          onSearch={(value: string) => setSearchText(value)}
        />
        <CheckboxGroup options={options} searchText={searchText} />
      </StyledCheckboxGroupSearchable>
    </>
  );
};

export default CheckboxGroupSearchable;
