const Products = ({ products }) => {
  function finalPrice(price, discount) {
    return price * (1 - discount / 100);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="aspect-square w-full bg-slate-100 overflow-hidden relative">
              <img
                src={p.images[0]}
                alt={p.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />

              {p.discountPercentage > 0 && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  {Math.round(p.discountPercentage)}% OFF
                </span>
              )}
            </div>

            <div className="p-4 flex flex-col grow">
              <h1 className="text-base font-semibold text-slate-800 line-clamp-1 mb-1">
                {p.title}
              </h1>

              <p className="text-xs text-slate-500 line-clamp-2 mb-4 grow">
                {p.description}
              </p>

              <div className="flex items-baseline gap-2 mb-4">
                <h5 className="text-lg font-bold text-slate-900">
                  ${finalPrice(p.price, p.discountPercentage).toFixed(2)}
                </h5>

                {p.discountPercentage > 0 && (
                  <h5 className="text-xs text-slate-400 line-through">
                    ${p.price}
                  </h5>
                )}
              </div>

              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
