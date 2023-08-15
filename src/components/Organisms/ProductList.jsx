import AppCard from '../Molecules/AppCard';

function ProductList({ products }) {
  // id, imgUrl, name, price;

  return (
    <section>
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-5 pb-28">
        {products.map((product) => (
          <AppCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductList;
