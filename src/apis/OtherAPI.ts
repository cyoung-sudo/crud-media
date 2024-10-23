import { api, baseURL } from "./configs/axiosConfig.ts";

const OtherAPI = {
  //----- Ping server
  ping: async () => {
    const res = await api.request({
      method: "GET",
      url: "/api/ping",
      baseURL
    });

    return res;
  }
};

export default OtherAPI;