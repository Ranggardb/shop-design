import { formatToRupiah } from '../../utils/helper';
import AppImage from '../Atoms/AppImage';

function AppCard(props) {
  const { id, image, alt, name, price } = props;

  return (
    <div className="group shadow-md grid content-between rounded-lg border pb-8 hover:ring-2 hover:ring-[#EBA529]">
      <a key={id} href={image}>
        <AppImage src={image} alt={alt} />
      </a>
      <div className="px-6 ">
        <h3 className="mt-4 text-md font-medium text-gray-700">{name}</h3>
        <p className="mt-1 text-lg font-medium text-pink-400">
          {formatToRupiah(price)}
        </p>
      </div>
    </div>
  );
}

export default AppCard;
