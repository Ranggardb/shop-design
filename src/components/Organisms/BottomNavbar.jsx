import {
  HomeIcon,
  ShoppingBagIcon,
  ArrowsUpDownIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

const menuNavigation = [
  {
    name: 'home',
    icon: <HomeIcon className="icon" />,
    url: '/home',
  },
  {
    name: 'order',
    icon: <ShoppingBagIcon className="icon" />,
    url: '/order',
  },
  {
    name: 'withdraw',
    icon: <ArrowsUpDownIcon className="icon" />,
    url: '/withdraw',
  },
  {
    name: 'account',
    icon: <UserIcon className="icon" />,
    url: '/account',
  },
];

function BottomNavbar() {
  const [activeMenuItem, setActiveMenuItem] = useState(menuNavigation[0].name);

  const handleClick = (name) => {
    setActiveMenuItem(name);
  };

  return (
    <section className="fixed container mx-auto bg-white shadow-[0_0_20px_-10px] shadow-slate-600 bottom-0 left-0 right-0 p-2">
      <div className="flex justify-around items-end">
        {menuNavigation.map((menu, index) => (
          <div
            key={index}
            className="flex h-12 md:h-14 relative flex-col items-center justify-end group group-hover:text-pink-500 cursor-pointer"
            onClick={() => handleClick(menu.name)}
          >
            <div
              className={`group-hover:text-pink-500 ${
                activeMenuItem === menu.name
                  ? 'text-pink-500'
                  : 'text-[#BDBDBD]'
              }`}
            >
              {menu.icon}
            </div>
            <p
              className={`capitalize text-[#BDBDBD] text-sm font-medium self-end transition group-hover:text-pink-500 ${
                activeMenuItem === menu.name
                  ? 'text-pink-500'
                  : 'text-[#BDBDBD]'
              }`}
            >
              {menu.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BottomNavbar;
