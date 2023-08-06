import { BellIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import Logo from '../../../assets/msglowsellershop-fit.png';

function TopNavbar() {
  return (
    <nav className="flex items-center justify-between pt-10 pb-2">
      <div className="w-40 cursor-pointer">
        <img src={Logo} alt="msglow sellershop" />
      </div>
      <div className="flex items-end justify-end space-x-10 w-40 pr-3">
        <div className="group cursor-pointer relative inline-flex items-center text-sm font-medium text-center text-white rounded-lg outline-none">
          <BellIcon className="h-6 w-6 text-black" />
          <div className="group-hover:animate-ping absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-pink-400 rounded-full -top-2 -right-2">
            8
          </div>
        </div>
        <div className="group cursor-pointer relative inline-flex items-center text-sm font-medium text-center text-white rounded-lg outline-none">
          <ShoppingCartIcon className="h-6 w-6 text-black" />
          <div className="group-hover:animate-ping absolute inline-flex items-center justify-center w-5 h-5 text-xs text-white bg-pink-400 rounded-full -top-2 -right-2">
            0
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
