import BasketList from 'components/basket-list/BasketList';
import Navbar from 'components/navbar/Navbar';

import FilterArea from 'modules/filter-area/FilterArea';
import ProductArea from 'modules/product-area/ProductArea';

import { AppLayout, MainPageLayout } from 'styles/components';

const App = () => (
  <>
    <Navbar />
    <AppLayout>
      <MainPageLayout>
        <FilterArea />
        <ProductArea />
        <BasketList />
      </MainPageLayout>
    </AppLayout>
  </>
);

export default App;
