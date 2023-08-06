import AppCard from '../Molecules/AppCard';

function ProductList({ products }) {
  return (
    <section>
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-5">
        {products.map(({ id, imgUrl, name, price }) => (
          <AppCard
            key={id}
            id={id}
            image={imgUrl}
            alt={name}
            name={name}
            price={price}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
