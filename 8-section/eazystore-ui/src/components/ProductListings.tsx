import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

export default function ProductListings({ products }: { products: Product[] }) {
  if (!products.length) {
    return (
      <p className="text-center font-primary font-bold text-lg text-primary">
        No products found
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}
