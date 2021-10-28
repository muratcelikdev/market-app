import styled from 'styled-components';

import { BRANDS, TAGS } from 'common/constants';
import * as colors from 'common/colors';

import CheckboxGroupSearchable from 'components/checkbox-group-searchable/CheckboxGroupSearchable';
import SortOrder from 'components/sort-order/SortOrder';

import { FilterColumn, FlexBoxCentered } from 'styles/components';
import screens from 'styles/screen';

const StyledFilterToggleButton = styled(FlexBoxCentered).attrs({ as: 'button' })`
  display: none;

  @media ${screens.smallScreen} {
    display: flex;

    margin: 0 16px;
    padding: 12px;

    background-color: ${colors.lightPink};

    font-size: 14px;
    font-weight: 600;

    color: ${colors.base};
  }
`;

const FilterArea = () => (
  <>
    <StyledFilterToggleButton>Filter</StyledFilterToggleButton>
    <FilterColumn>
      <SortOrder />
      <CheckboxGroupSearchable title="Brands" options={BRANDS} />
      <CheckboxGroupSearchable title="Tags" options={TAGS} />
    </FilterColumn>
  </>
);

export default FilterArea;
