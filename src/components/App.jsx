import AppCard from './Molecules/AppCard';
import { dataDummy } from '../utils/dataDummy';

function App() {
  const products = dataDummy;

  return (
    <>
      <section className="px-5 md:px-20">
        <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-5">
          {products.map((product) => {
            const { no, _id, Image, ProductDescription, BasePrice } = product;
            return (
              <AppCard
                key={no}
                id={_id}
                image={Image}
                alt={ProductDescription}
                name={ProductDescription}
                price={BasePrice}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default App;
