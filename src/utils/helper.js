const formatToRupiah = (price) => {
  const formatedValue = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return `Rp. ${formatedValue}`;
};
function formatAngka(angka, prefix) {
  var number_string = angka.replace(/[^,\d]/g, '').toString(),
    split = number_string.split(','),
    sisa = split[0].length % 3,
    rupiah = split[0].substr(0, sisa),
    ribuan = split[0].substr(sisa).match(/\d{3}/gi);

  // tambahkan titik jika yang di input sudah menjadi angka ribuan
  if (ribuan) {
    var separator = sisa ? ',' : '';
    rupiah += separator + ribuan.join('.');
  }

  rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
  return prefix == undefined ? rupiah : rupiah ? 'Rp. ' + rupiah : '';
}

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

export {
  formatToRupiah,
  formatAngka,
  greetings,
  generateAvatar,
  searchItem,
  isItemExist,
};
