import {
  HomeIcon,
  DocumentArrowDownIcon,
  ArrowsUpDownIcon,
  UserIcon,
  InboxStackIcon,
} from '@heroicons/react/24/outline';

const menuNavigation = [
  {
    name: 'home',
    icon: <HomeIcon className="icon" />,
    url: '/home',
  },
  {
    name: 'order',
    icon: <DocumentArrowDownIcon className="icon" />,
    url: '/order',
  },
  {
    name: 'aktivasi',
    icon: <InboxStackIcon className="icon-highligh" />,
    url: '/aktivasi',
  },
  {
    name: 'inventory',
    icon: <ArrowsUpDownIcon className="icon" />,
    url: '/inventory',
  },
  {
    name: 'akun',
    icon: <UserIcon className="icon" />,
    url: '/akun',
  },
];

function BottomNavbar() {
  const handleClick = (url) => {
    console.log(url);
  };
  return (
    <section className="fixed container mx-auto bg-white shadow-[0_0_20px_-10px] shadow-slate-600 bottom-0 left-0 right-0 p-2">
      <div className="flex justify-around items-end">
        {menuNavigation.map((menu, index) => (
          <div
            key={index}
            className="flex h-12 md:h-14 relative flex-col items-center justify-end group cursor-pointer"
            onClick={() => handleClick(menu.url)}
          >
            {menu.icon}
            <p className="capitalize text-sm font-medium self-end transition group-hover:text-pink-500">
              {menu.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BottomNavbar;
