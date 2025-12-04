import axios from "@/plugins/axios";
import { PaginationParams } from "./common";

export const fetchOrders = (params: PaginationParams) =>
  axios.get("/api/orders", { params, withCredentials: true });

export const createOrder = (orderItems: any[]) =>
  axios.post(
    "/api/orders",
    { orderItems },
    {
      withCredentials: true,
    }
  );

export const deleteOrder = (orderId: number | string) =>
  axios.delete(`/api/orders/${orderId}`, { withCredentials: true });

export const fetchOrderDetail = (orderId: number | string) =>
  axios.get(`/api/items/${orderId}`, { withCredentials: true });

export const updateOrderStatus = (
  orderId: number | string,
  status: string
) =>
  axios.put(
    `/api/orders/${orderId}/status`,
    { status },
    { withCredentials: true }
  );
