import { useEffect, useState } from "react";
import apiClient from "../api/apiClient";
import type { Product } from "../types/product";
import PageHeading from "./PageHeading";
import ProductListings from "./ProductListings";

export default function Home() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await apiClient.get<Product[]>("/products");
        setProducts(response.data);
        setError(null);
      } catch (error: any) {
        const err =
          error.response?.data?.message || "Failed to fetch products.";

        console.error(err);
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold">Loading products...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="text-xl font-semibold text-red-600">{error}</span>
      </div>
    );
  }

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
