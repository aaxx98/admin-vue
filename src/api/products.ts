import axios from "@/plugins/axios";
import { PaginationParams } from "./common";

export const fetchProducts = (params: PaginationParams) =>
  axios.get("/api/products", { params, withCredentials: true });

export const createProduct = (product: Record<string, any>) =>
  axios.post("/api/products", product, { withCredentials: true });

export const updateProduct = (
  productId: number | string,
  product: Record<string, any>
) => axios.put(`/api/products/${productId}`, product, { withCredentials: true });

export const deleteProduct = (productId: number | string) =>
  axios.delete(`/api/products/${productId}`, { withCredentials: true });
