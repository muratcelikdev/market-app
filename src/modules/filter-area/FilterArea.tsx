import { BRANDS, TAGS } from 'common/constants';

import CheckboxGroupSearchable from 'components/checkbox-group-searchable/CheckboxGroupSearchable';
import SortOrder from 'components/sort-order/SortOrder';

import { FilterColumn } from 'styles/components';

const FilterArea = () => (
  <FilterColumn>
    <SortOrder />
    <CheckboxGroupSearchable title="Brands" options={BRANDS} />
    <CheckboxGroupSearchable title="Tags" options={TAGS} />
  </FilterColumn>
);

export default FilterArea;
