import SkCard from './SkCard';

function SkProductList() {
  const repeatNumber = 12;

  return (
    <section className="px-5 md:px-20">
      <div className="grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-5">
        {[...Array(repeatNumber)].map((e, i) => (
          <SkCard key={i} />
        ))}
      </div>
    </section>
  );
}

export default SkProductList;
