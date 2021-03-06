import styled, { css } from 'styled-components';

import * as colors from 'common/colors';
import { BasketListProps } from 'common/interfaces';

import BasketListItemContainer from 'components/basket-list-item/BasketListItemContainer';
import BasketTotalAmountContainer from 'components/basket-total-amount/BasketTotalAmountContainer';

import { FlexBox } from 'styles/components';
import screens from 'styles/screen';

interface StyledBasketListProps {
  visible: boolean;
}

const StyledBasketList = styled(FlexBox)(
  ({ visible }: StyledBasketListProps) => css`
    width: 280px;
    min-height: 321.9px;
    height: fit-content;

    padding: 16px;

    background-color: ${colors.white};

    border: 8.2px solid ${colors.base};

    visibility: ${visible ? 'visible' : 'hidden'};

    @media ${screens.smallScreen} {
      width: 100%;
      height: 100%;
    }
  `
);

const StyledBasketListItemContainer = styled(FlexBox)`
  width: 100%;
  max-height: 280px;

  overflow-y: scroll;

  @media ${screens.smallScreen} {
    max-height: calc(100% - 50px);
  }
`;

const StyledBasketListItem = styled(BasketListItemContainer)`
  padding: 20.4px 0;

  border-bottom: 1px solid ${colors.grey160};

  &:first-child {
    padding-top: 10px;
  }
`;

const StyledBasketTotalAmount = styled(BasketTotalAmountContainer)`
  margin-top: 16.4px;
`;

const BasketList = ({ className, products }: BasketListProps) => {
  return (
    <StyledBasketList
      visible={products.length > 0}
      className={className}
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-end"
    >
      <StyledBasketListItemContainer flexDirection="column">
        {products.length > 0 &&
          products.map(({ productName, price, slug }) => (
            <StyledBasketListItem productName={productName} price={price} slug={slug} />
          ))}
      </StyledBasketListItemContainer>
      <StyledBasketTotalAmount />
    </StyledBasketList>
  );
};

export default BasketList;
