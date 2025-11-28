import axios from "@/plugins/axios";

export interface PaginationParams {
  page: number;
  pageSize: number;
  keyword?: string | String;
}

export const fetchListData = <T = any>(apiUrl: string, params: PaginationParams) =>
  axios.get<T>(apiUrl, {
    params,
    withCredentials: true,
  });
