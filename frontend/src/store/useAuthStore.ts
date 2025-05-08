import { create } from "zustand";
import toast from "react-hot-toast";
import { IUser } from "../types";

interface AuthState {
  user: IUser | null;
  isSigningUp: boolean;
  isLoggingIng: boolean;
  isCheckingAuth: boolean;
}

const defaultState = {
  user: null,
  isSigningUp: false,
  isLoggingIng: false,
  isCheckingAuth: true,
};

export const useAuthStore = create<AuthState>((set, get) => ({
  ...defaultState,

  setUser: (user: IUser) => {
    set({ user });
  },

  // checkAuth: async () => {
  //   try {
  //     const res = await axiosInstance("auth/check-auth");

  //     if (res.status === 200) {
  //       set({ user: res.data });

  //       get().connectSocket();
  //     }
  //   } catch (error) {
  //     console.log("useAuthStore error", error);

  //     set({ user: null });
  //   } finally {
  //     set({ isCheckingAuth: false });
  //   }
  // },

  // signup: async (formData) => {
  //   try {
  //     set({ isSigningUp: true });

  //     const res = await axiosInstance.post("/auth/signup", formData);

  //     if (res.status === 201) {
  //       toast.success("Account created successfully");

  //       set({ user: res.data });
  //     }
  //   } catch (error) {
  //     console.log("useAuthStore error", error);

  //     toast.error(error.response.data.message);
  //   } finally {
  //     set({ isSigningUp: false });
  //   }
  // },

  // login: async (formData) => {
  //   try {
  //     set({ isLoggingIng: true });

  //     const res = await axiosInstance.post("/auth/login", formData);

  //     if (res.status === 200) {
  //       toast.success("Login successfully");

  //       set({ user: res.data });
  //     }
  //   } catch (error) {
  //     console.log("useAuthStore error", error);

  //     toast.error(error.response.data.message);
  //   } finally {
  //     set({ isLoggingIng: false });
  //   }
  // },

  // logout: async () => {
  //   try {
  //     const res = await axiosInstance.post("/auth/logout");

  //     if (res.status === 200) {
  //       toast.success(res.data.message);

  //       set({ user: null });
  //     }
  //   } catch (error) {
  //     console.log("useAuthStore error", error);

  //     toast.error(error.response.data.message);
  //   }
  // },
}));
