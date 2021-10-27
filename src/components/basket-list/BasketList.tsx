import styled from 'styled-components';

import * as colors from 'common/colors';

import BasketListItem from 'components/basket-list-item/BasketListItem';
import BasketTotalAmount from 'components/basket-total-amount/BasketTotalAmount';

const StyledBasketList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  width: 280px;
  min-height: 321.9px;
  height: fit-content;

  padding: 16px;

  background-color: ${colors.white};

  border: 8.2px solid ${colors.base};
`;

const StyledBasketListItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBasketListItem = styled(BasketListItem)`
  padding: 20.4px 0;

  border-bottom: 1px solid ${colors.grey160};

  &:first-child {
    padding-top: 10px;
  }
`;

const StyledBasketTotalAmount = styled(BasketTotalAmount)`
  margin-top: 16.4px;
`;

const BasketList = () => {
  return (
    <StyledBasketList>
      <StyledBasketListItemContainer>
        {/* TODO: implement dynamic basket list item logic */}
        <StyledBasketListItem productName="Example Product" price={14.99} />
        <StyledBasketListItem productName="Example Product" price={14.99} />
        <StyledBasketListItem productName="Example Product" price={14.99} />
      </StyledBasketListItemContainer>
      <StyledBasketTotalAmount />
    </StyledBasketList>
  );
};

export default BasketList;
