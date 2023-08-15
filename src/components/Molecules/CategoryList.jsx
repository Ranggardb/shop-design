import { useDispatch, useSelector } from 'react-redux';
import { searchItem } from '../../utils/helper';
import {
  selectCategoryProducts,
  selectProducts,
} from '../../store/product/productSelector';
import { setFilteredProducts } from '../../store/product/productReducer';
import { useState } from 'react';

function CategoryList() {
  const [activeCategory, setActiveCategory] = useState('');

  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const categoryProducts = useSelector(selectCategoryProducts);

  const handleSearchByCategory = (name) => {
    const productsByCategory = searchItem(products, name, 'category');
    dispatch(setFilteredProducts(productsByCategory));
    setActiveCategory(name);
  };

  return (
    <div className="flex overflow-x-scroll py-2 space-x-2 no-scrollbar mb-5">
      <button
        className={`py-1 px-4 rounded-full text-[12px] capitalize outline-none whitespace-nowrap ${
          activeCategory === ''
            ? 'bg-[#FDEFF3] text-[#FA6F92]'
            : 'bg-[#F1F1F1] text-[#828282]'
        }`}
        onClick={() => handleSearchByCategory('')}
      >
        see all
      </button>
      {categoryProducts
        ? categoryProducts.map((category, index) => (
            <button
              className={`py-1 px-4 rounded-full capitalize outline-none text-sm ${
                activeCategory === category
                  ? 'bg-[#FDEFF3] text-[#FA6F92]'
                  : 'bg-[#F1F1F1] text-[#828282]'
              }`}
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
