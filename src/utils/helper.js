const formatToRupiah = (price) => {
  const formatedValue = new Intl.NumberFormat().format(price);
  return `Rp. ${formatedValue}`;
};

const greetings = () => {
  const hour = new Date().getHours();

  if (hour < 12) return 'good morning';
  if (hour < 18) return 'good afternoon';
  return 'good evening';
};

const generateAvatar = (name, type = 1) => {
  return `https://robohash.org/${name}?set=set${type}`;
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

const additemToList = (arrayList, addItem) => {
  return [...arrayList, { ...addItem, quantity: 1 }];
};

const increaseItemQuantityFromList = (arrayList, itemId) => {
  return arrayList.map((item) =>
    item.id === itemId.id ? { ...item, quantity: item.quantity + 1 } : item
  );
};

const decreaseItemQuantityFromList = (arrayList, itemId) => {
  return arrayList.map((item) =>
    item.id === itemId.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};

const deleteItemFromList = (arrayList, deleteId) => {
  return arrayList.filter((item) => item.id !== deleteId.id);
};

export {
  formatToRupiah,
  greetings,
  generateAvatar,
  searchItem,
  isItemExist,
  additemToList,
  increaseItemQuantityFromList,
  decreaseItemQuantityFromList,
  deleteItemFromList,
};
