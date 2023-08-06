const formatToRupiah = (price) => {
  const formatedValue = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `Rp. ${formatedValue}`;
};

const searchItem = (arrayList, searchInput, option = 'name') => {
  const searchItem = searchInput.toLowerCase();

  return arrayList.filter((item) =>
    item?.[option].toLowerCase().includes(searchItem)
  );
};

const isItemExist = (arrayList, searchItem) => {
  return arrayList.find((arrayItem) => arrayItem.id === searchItem.id);
};

export { formatToRupiah, searchItem, isItemExist };
