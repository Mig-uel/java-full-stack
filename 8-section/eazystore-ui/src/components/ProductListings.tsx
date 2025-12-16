import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import ProductCard from "./ProductCard";
import apiClient from "../api/apiClient";
import SearchBox from "./SearchBox";
import Dropdown from "./Dropdown";

const sortOptions = ["Popularity", "Price: Low to High", "Price: High to Low"];

export default function ProductListings() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  const [searchTerm, setSearchTerm] = useState("");

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

  if (!products.length) {
    return (
      <p className="text-center font-primary font-bold text-lg text-primary">
        No products found
      </p>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
        <SearchBox
          label="Search"
          placeholder="Search products..."
          value={searchTerm}
          setValue={setSearchTerm}
        />

        <Dropdown
          label="Sort By"
          options={sortOptions}
          selectedOption="Popularity"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
        {products.map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </div>
  );
}
