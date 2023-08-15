import { useDispatch } from 'react-redux';
import { MinusCircleIcon, PlusCircleIcon } from '@heroicons/react/24/outline';
import { formatToRupiah } from '../../../utils/helper';
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from '../../../store/cart/cartReducer';

function CartList({ product }) {
  const { id, name, category, imgUrl, price, quantity } = product;

  const dispatch = useDispatch();

  const addItemHandler = () => dispatch(addItemToCart(product));
  const removeItemHandler = () => dispatch(removeItemFromCart(product));
  const clearItemHandler = () => dispatch(clearItemFromCart(product));

  return (
    <li key={id} className="flex py-6">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src={imgUrl}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between items-center text-base font-medium text-gray-900 mb-2">
            <h3 className="w-20 lg:w-40">
              <a className="text-sm" href={imgUrl}>
                {name}
              </a>
            </h3>
            <p className="ml-4 text-sm">{formatToRupiah(price)}</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="mt-1 text-sm text-gray-500">{category}</p>
            <div className="flex space-x-3">
              <button onClick={removeItemHandler}>
                <MinusCircleIcon className="h-6 w-6" />
              </button>
              <button onClick={addItemHandler}>
                <PlusCircleIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <p className="text-gray-500">Qty {quantity}</p>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-pink-600 hover:text-pink-500"
              onClick={clearItemHandler}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartList;
