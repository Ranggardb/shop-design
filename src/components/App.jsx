import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../services/Product/product';
import { setProducts, setSearchField } from '../store/product/productReducer';
import { selectProducts } from '../store/product/productSelector';

// import AppCard from './Molecules/AppCard.jsx';
import ProductList from './Organisms/ProductList';
import TopNavbar from './Organisms/TopNavbar';
import BottomNavbar from './Organisms/BottomNavbar';
import AppSearchBar from './Molecules/AppSearchBar';

function App() {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      dispatch(setProducts(products));
    };

    fetchProducts();
  }, [dispatch]);

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value.toLowerCase()));
  };

  return (
    <>
      <TopNavbar />
      <AppSearchBar
        className="monster-searchBox"
        placeholder="Search Monster"
        onChangeHandler={onSearchChange}
      />
      <ProductList products={products} />
      <BottomNavbar />
    </>
  );
}

export default App;
