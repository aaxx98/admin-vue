import axios from "axios";

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  name: string;
  password: string;
}

export interface AuthUser {
  name: string;
  avatar: string;
}

export const loginUser = async (payload: LoginPayload) =>
  axios.post("/api/auth/login", payload, { withCredentials: true });

export const registerUser = async (payload: RegisterPayload) =>
  axios.post("/api/user/register", payload, { withCredentials: true });

export const fetchCurrentUser = async () =>
  axios.get<AuthUser>("/api/auth/me", { withCredentials: true });

export const logoutUser = async () =>
  axios.post("/api/auth/logout", {}, { withCredentials: true });
