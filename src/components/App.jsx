import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getProducts } from '../services/Product/product';
import { setProducts, setSearchField } from '../store/product/productReducer';
import {
  selectProducts,
  selectSearchField,
} from '../store/product/productSelector';

import TopNavbar from './Organisms/TopNavbar';
import BottomNavbar from './Organisms/BottomNavbar';
import AppSearchBar from './Molecules/AppSearchBar';
import SkProductList from './Templates/Skeleton/SkProductList';
const ProductList = React.lazy(() => import('./Organisms/ProductList'));

function App() {
  const dispatch = useDispatch();
  const searchField = useSelector(selectSearchField);
  const products = useSelector(selectProducts);

  const [filteredProduct, setFilteredProduct] = useState(products);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      dispatch(setProducts(products));
    };

    fetchProducts();
  }, [dispatch]);

  useEffect(() => {
    const searchProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchField)
    );

    setFilteredProduct(searchProduct);
  }, [products, searchField]);

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value.toLowerCase()));
  };

  return (
    <>
      <TopNavbar />
      <AppSearchBar
        className=""
        placeholder="Facial Wash"
        onChangeHandler={onSearchChange}
      />
      <Suspense fallback={<SkProductList />}>
        <ProductList products={filteredProduct} />
      </Suspense>
      <BottomNavbar />
    </>
  );
}

export default App;
