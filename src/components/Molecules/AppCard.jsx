import { formatAngka, formatToRupiah } from '../../utils/helper';
import AppImage from '../Atoms/AppImage';
import AddIcon from '../../assets/AddIcon.svg';
function AppCard(props) {
  const { id, image, alt, name, price } = props;

  return (
    <figure className="group shadow-md grid content-between rounded-lg border pb-3 hover:ring-2 hover:ring-[#EBA529]">
      <a key={id} href={image} className="h-36 lg:h-52 bg-slate-200 rounded-lg">
        <AppImage src={image} alt={alt} />
      </a>
      <div className="px-2 lg:px-6 ">
        <h3 className="mt-4 text-sm font-medium text-gray-700 ">{name}</h3>
        <div className="flex justify-between">
          <p className="mt-1 text-lg text-black font-bold">
            {formatAngka(price, '')}
          </p>
          <button>
            <img
              src={AddIcon}
              alt=""
              className="h-5 w-5 hover:scale-125 hover:shadow-lg shadow-black rounded-lg transition"
            />
          </button>
        </div>
      </div>
    </figure>
  );
}

export default AppCard;
