import apiClient from "../api/apiClient";
import type { Product } from "../types/product";

export default async function productsLoader() {
  try {
    const response = await apiClient.get<Product[]>("/products");
    return response.data;
  } catch (error: any) {
    console.log(error);
    const err = error.response?.data?.message || "Failed to fetch products.";
    throw new Response(err, { status: error.status || 500 });
  }
}
