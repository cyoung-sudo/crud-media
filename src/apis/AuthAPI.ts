import { api, baseURL } from "./configs/axiosConfig.ts";

const AuthAPI = {
  // Retrieve authenticated user
  getAuthUser: async () => {
    const res = await api.request({
      method: "GET",
      url: "/api/auth",
      baseURL
    });

    return res;
  },

  //----- Login user
  login: async (username: string, password: string) => {
    const res = await api.request({
      method: "POST",
      data: {
        username,
        password
      },
      url: "/api/auth/login",
      baseURL
    });

    return res;
  },

  //----- Logout user
  logout: async () => {
    const res = await api.request({
      method: "DELETE",
      url: "/api/auth/logout",
      baseURL
    });

    return res;
  }
};

export default AuthAPI;