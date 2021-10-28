import { useState } from 'react';
import styled from 'styled-components';

import { BRANDS, TAGS } from 'common/constants';
import * as colors from 'common/colors';

import CheckboxGroupSearchable from 'components/checkbox-group-searchable/CheckboxGroupSearchable';
import SortOrder from 'components/sort-order/SortOrder';

import { FilterColumn, FlexBoxCentered } from 'styles/components';
import screens, { intervals } from 'styles/screen';
import Modal from 'components/modal/Modal';

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

const StyledMobileFilterColumn = styled(FilterColumn)`
  @media ${screens.smallScreen} {
    display: flex;

    width: 100%;
    max-height: calc(100% - 50px);

    padding: 16px;

    overflow-y: scroll;
  }
`;

const FilterArea = () => {
  const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false);

  const handleFilterModalVisibility = () => {
    if (window.innerWidth <= intervals.smallScreenMaxWidth) {
      setFilterModalVisible(!filterModalVisible);
    } else {
      setFilterModalVisible(false);
    }
  };

  return (
    <>
      <StyledFilterToggleButton onClick={handleFilterModalVisibility}>
        Filter
      </StyledFilterToggleButton>
      <FilterColumn flexDirection="column">
        <SortOrder />
        <CheckboxGroupSearchable title="Brands" options={BRANDS} />
        <CheckboxGroupSearchable title="Tags" options={TAGS} />
      </FilterColumn>
      <Modal
        visible={filterModalVisible}
        submitButtonText="Save"
        onClose={() => setFilterModalVisible(false)}
      >
        <StyledMobileFilterColumn flexDirection="column">
          <SortOrder />
          <CheckboxGroupSearchable title="Brands" options={BRANDS} />
          <CheckboxGroupSearchable title="Tags" options={TAGS} />
        </StyledMobileFilterColumn>
      </Modal>
    </>
  );
};

export default FilterArea;
