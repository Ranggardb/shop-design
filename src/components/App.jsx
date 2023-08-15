import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../services/Product/product';
import {
  setFilteredProducts,
  setProducts,
  setSearchField,
} from '../store/product/productReducer';
import {
  selectFilteredProducts,
  selectProducts,
  selectSearchField,
} from '../store/product/productSelector';

import TopNavbar from './Organisms/TopNavbar/TopNavbar';
import BottomNavbar from './Organisms/BottomNavbar';
import AppSearchBar from './Molecules/AppSearchBar';
import SkProductList from './Templates/Skeleton/SkProductList';
import { searchItem } from '../utils/helper';
import CategoryList from './Molecules/CategoryList';
import ShoppingCarts from './Organisms/Carts/ShoppingCarts';
const ProductList = React.lazy(() => import('./Organisms/ProductList'));

function App() {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const searchField = useSelector(selectSearchField);
  const filteredProduct = useSelector(selectFilteredProducts);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      dispatch(setProducts(products));
    };
    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const searchProduct = searchItem(products, searchField);
    dispatch(setFilteredProducts(searchProduct));
  }, [dispatch, products, searchField]);

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value.toLowerCase()));
  };

  return (
    <div className="container mx-auto px-2 relative">
      <TopNavbar />
      <ShoppingCarts />
      <CategoryList />
      <AppSearchBar
        className=""
        placeholder="Search Product"
        onChangeHandler={onSearchChange}
      />
      <Suspense fallback={<SkProductList />}>
        <ProductList products={filteredProduct} />
      </Suspense>
      <BottomNavbar />
    </div>
  );
}

export default App;
