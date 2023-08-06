import { useDispatch, useSelector } from 'react-redux';
import { searchItem } from '../../utils/helper';
import {
  selectCategoryProducts,
  selectProducts,
} from '../../store/product/productSelector';
import { setFilteredProducts } from '../../store/product/productReducer';

function CategoryList() {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const categoryProducts = useSelector(selectCategoryProducts);

  const handleSearchByCategory = (name) => {
    const productsByCategory = searchItem(products, name, 'category');
    dispatch(setFilteredProducts(productsByCategory));
  };

  return (
    <div className="flex overflow-x-scroll p-2 space-x-2 styled-scrollbar mb-5">
      <button
        className="py-1 px-3 rounded-full text-[12px] capitalize outline-none whitespace-nowrap bg-pink-400 text-white"
        onClick={() => handleSearchByCategory('')}
      >
        see all
      </button>
      {categoryProducts
        ? categoryProducts.map((category, index) => (
            <button
              className="py-1 px-3 rounded-full capitalize outline-none text-sm bg-slate-100"
              key={index}
              onClick={() => handleSearchByCategory(category)}
            >
              {category}
            </button>
          ))
        : null}
    </div>
  );
}

export default CategoryList;
