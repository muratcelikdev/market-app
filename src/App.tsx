import { useEffect } from 'react';
import styled from 'styled-components';

import BasketList from 'components/basket-list/BasketList';
import Navbar from 'components/navbar/Navbar';

import FilterArea from 'modules/filter-area/FilterArea';
import ProductArea from 'modules/product-area/ProductArea';

import { AppLayout, MainPageLayout } from 'styles/components';
import screens from 'styles/screen';

import { useAppDispatch } from 'state/hooks';
import { getItems } from 'state/slices/itemsSlice';
import { getCompanies } from 'state/slices/companiesSlice';

const StyledBasketList = styled(BasketList)`
  @media ${screens.smallScreen} {
    display: none;
  }
`;

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getItems());
    dispatch(getCompanies());
  }, []);

  return (
    <>
      <Navbar />
      <AppLayout>
        <MainPageLayout>
          <FilterArea />
          <ProductArea />
          <StyledBasketList />
        </MainPageLayout>
      </AppLayout>
    </>
  );
};

export default App;
