import { useEffect, useMemo, useState } from "react";
import apiClient from "../api/apiClient";
import type { Product } from "../types/product";
import type { SortOption } from "../types/sortOption";
import Dropdown from "./Dropdown";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";

const sortOptions = [
  {
    label: "popularity",
    value: "popularity",
  },
  {
    label: "price: low to high",
    value: "asc",
  },
  {
    label: "price: high to low",
    value: "desc",
  },
];

export default function ProductListings() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setIsLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<Product[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>(sortOptions[0]);

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

  const filteredAndSortedProducts = useMemo(() => {
    // This memo is to avoid unnecessary computations on every render
    const filteredAndSortedProducts = products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        if (sortOption.value === "asc") {
          return a.price - b.price;
        } else if (sortOption.value === "desc") {
          return b.price - a.price;
        } else {
          return b.popularity - a.popularity;
        }
      });

    return filteredAndSortedProducts;
  }, [searchTerm, sortOption, products]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen dark:text-lighter">
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
          selectedOption={sortOption.value}
          setSelectedOption={setSortOption}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
        {filteredAndSortedProducts.length ? (
          filteredAndSortedProducts.map((product) => (
            <ProductCard key={product.productId} product={product} />
          ))
        ) : (
          <p className="text-center font-primary font-bold text-lg text-primary dark:text-lighter col-span-full">
            No products found
          </p>
        )}
      </div>
    </div>
  );
}
