import { api, baseURL } from "./configs/axiosConfig.ts";

const PostAPI = {
  //----- Retrieve posts
  getAll: async () => {
    const res = await api.request({
      method: "GET",
      url: "/api/posts",
      baseURL
    });

    return res;
  },

  //----- Create post
  create: async (title: string, text: string) => {
    const res = await api.request({
      method: "POST",
      data: {
        title,
        text
      },
      url: "/api/posts",
      baseURL
    });

    return res;
  }
};

export default PostAPI;