import {
  BellIcon,
  ShoppingCartIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/outline';
import { generateAvatar, greetings } from '../../../utils/helper';

function TopNavbar() {
  const avatar = generateAvatar('msglow');
  const greeting = greetings();

  return (
    <nav className="flex items-center justify-between pt-10 pb-2">
      <div className="w-fit cursor-pointer flex space-x-3">
        <img
          className="rounded-[15px] bg-[#C2928E] w-12 h-12"
          src={avatar}
          alt="msglow sellershop"
        />
        <div>
          <h3>{greeting}</h3>
          <h2 className="text-lg capitalize font-bold">jenny wilson</h2>
        </div>
      </div>
      <div className="flex items-end justify-end space-x-3 w-40 pr-3">
        <div className="group cursor-pointer relative inline-flex items-center text-sm font-medium text-center text-white rounded-lg outline-none">
          <BellIcon className="h-6 w-6 text-black" />
          <div className="group-hover:animate-ping absolute inline-flex items-center ring-2 ring-white justify-center w-5 h-5 text-xs text-white bg-pink-400 rounded-full -top-2 -right-2">
            3
          </div>
        </div>
        <div className="group cursor-pointer relative inline-flex items-center text-sm font-medium text-center text-white rounded-lg outline-none">
          <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6 text-black" />
          <div className="group-hover:animate-ping absolute inline-flex items-center ring-2 ring-white justify-center w-5 h-5 text-xs text-white bg-pink-400 rounded-full -top-2 -right-2"></div>
        </div>
        <div className="group cursor-pointer relative inline-flex items-center text-sm font-medium text-center text-white rounded-lg outline-none">
          <ShoppingCartIcon className="h-6 w-6 text-black" />
          <div className="group-hover:animate-ping absolute inline-flex items-center ring-2 ring-white justify-center w-5 h-5 text-xs text-white bg-pink-400 rounded-full -top-2 -right-2"></div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
