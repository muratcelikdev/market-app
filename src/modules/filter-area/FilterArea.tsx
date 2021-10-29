import { useState, useMemo } from 'react';
import styled from 'styled-components';

import * as colors from 'common/colors';
import { FilterAreaProps } from 'common/interfaces';

import CheckboxGroupSearchable from 'components/checkbox-group-searchable/CheckboxGroupSearchable';
import SortOrderContainer from 'components/sort-order/SortOrderContainer';

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

const FilterArea = ({
  items,
  tags,
  brands,
  filter,
  setBrands,
  setTags,
}: FilterAreaProps): JSX.Element => {
  const [filterModalVisible, setFilterModalVisible] = useState<boolean>(false);

  const tagList = useMemo(() => {
    return tags.map((tag) => ({
      text: tag,
      value: tag,
      info: items.filter(({ tags }) => tags.includes(tag)).length,
    }));
  }, [tags, items]);

  const brandList = useMemo(() => {
    return brands.map((brand) => ({
      text: brand,
      value: brand,
      info: items.filter(({ manufacturer }) => manufacturer === brand).length,
    }));
  }, [brands, items]);

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
        <SortOrderContainer />
        <CheckboxGroupSearchable
          title="Brands"
          options={brandList}
          onSelection={(selectedValues: any) => setBrands(selectedValues)}
          selectedValues={filter.brands}
        />
        <CheckboxGroupSearchable
          title="Tags"
          options={tagList}
          onSelection={(selectedValues) => setTags(selectedValues)}
          selectedValues={filter.tags}
        />
      </FilterColumn>
      <Modal
        visible={filterModalVisible}
        submitButtonText="Save"
        onClose={() => setFilterModalVisible(false)}
      >
        <StyledMobileFilterColumn flexDirection="column">
          <SortOrderContainer />
          <CheckboxGroupSearchable
            title="Brands"
            options={brandList}
            onSelection={(selectedValues: any) => setBrands(selectedValues)}
            selectedValues={filter.brands}
          />
          <CheckboxGroupSearchable
            title="Tags"
            options={tagList}
            onSelection={(selectedValues) => setTags(selectedValues)}
            selectedValues={filter.tags}
          />
        </StyledMobileFilterColumn>
      </Modal>
    </>
  );
};

export default FilterArea;
