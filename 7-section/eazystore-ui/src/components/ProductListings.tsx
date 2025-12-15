export default function ProductListings({
  products,
}: {
  products: Record<string, any>[];
}) {
  if (!products.length) {
    return <p>No products found</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
}
