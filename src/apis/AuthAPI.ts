import { api, baseURL } from "./configs/axiosConfig.ts";

const AuthAPI = {
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
  }
};

export default AuthAPI;