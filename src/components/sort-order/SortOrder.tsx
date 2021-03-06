import styled from 'styled-components';

import * as colors from 'common/colors';

import Subtitle from 'components/subtitle/Subtitle';
import RadioButtonGroup from 'components/radio-button-group/RadioButtonGroup';

import screens from 'styles/screen';

const SORT_ORDER_LIST = [
  {
    text: 'Price low to high',
    value: 'low',
  },
  {
    text: 'Price hight to low',
    value: 'high',
  },
  {
    text: 'New to Old',
    value: 'new',
  },
  {
    text: 'Old to new',
    value: 'old',
  },
];

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 12px;
`;

const StyledSortOrder = styled.div`
  width: 296px;
  height: 184px;

  padding: 26px 24px;

  background-color: ${colors.white};

  box-shadow: 0 6px 24px 0 ${colors.shadow200};

  @media ${screens.smallScreen} {
    width: 100%;
  }
`;

const SortOrder = ({ sorting, setSorting }) => {
  return (
    <>
      <StyledSubtitle text="Sorting" />
      <StyledSortOrder>
        <RadioButtonGroup
          options={SORT_ORDER_LIST}
          onChange={(value) => setSorting(value)}
          selectedOption={sorting}
        />
      </StyledSortOrder>
    </>
  );
};

export default SortOrder;
