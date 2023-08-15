import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function AppSearchBar(props) {
  const { placeholder, onChangeHandler, className } = props;

  return (
    <div className="relative mt-2 rounded-lg shadow-sm mb-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center px-2">
        <MagnifyingGlassIcon className="icon text-[#BDBDBD]" />
      </div>
      <input
        className={`text-gray-900 placeholder:text-[#BDBDBD] bg-[#F2F2F2] block w-full outline-none rounded-md border-0 py-1.5 px-10 sm:text-sm sm:leading-6 ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
}

export default AppSearchBar;
