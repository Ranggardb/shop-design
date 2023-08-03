const formatToRupiah = (price) => {
  const formatedValue = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `Rp. ${formatedValue}`;
};

export { formatToRupiah };
