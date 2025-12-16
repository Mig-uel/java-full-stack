import { useMemo, useState } from "react";
import type { Product } from "../types/product";
import type { SortOption } from "../types/sortOption";
import Dropdown from "./Dropdown";
import ProductCard from "./ProductCard";
import SearchBox from "./SearchBox";
import { useLoaderData } from "react-router-dom";

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
  const products = useLoaderData<Product[]>(); // Loaded via productsLoader

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState<SortOption>(sortOptions[0]);

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
