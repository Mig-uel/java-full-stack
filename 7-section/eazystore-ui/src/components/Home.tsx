import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";
import type { Product } from "../types/product";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await apiClient.get<Product[]>("/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <PageHeading title="Explore Eazy Stickers">
        Add a touch of creativity to your space with our wide range of fun and
        unique stickers. Perfect for any occasion!
      </PageHeading>

      <ProductListings products={products} />
    </div>
  );
}
