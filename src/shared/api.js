import axios from "axios";

const accessToken = document.cookie.split("=")[1];

export const api = axios.create({
  baseURL: "http://54.180.137.157/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    authorization: `${accessToken}`,
  },
});

export const api_token = axios.create({
  baseURL: "http://54.180.137.157/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    authorization: `${accessToken}`,
  },
});

export const api_post = axios.create({
  baseURL: "http://54.180.137.157/api",
  headers: {
    "content-type": "application/json;charset=UTF-8",
    accept: "application/json,",
    // "content-type": "multipart/form-data",
    // accept: "application/json,",
    authorization: `${accessToken}`,
  },
});

// headers: {
//   "content-type": "multipart/form-data",
//   accept: "application/json",
//   authorization: `${accessToken}`,}
//   },
// );

// 로컬인 경우
// api_post.defaults.headers.common[
//   "Authorization"
// ] = `Bearer ${localStorage.getItem("token")}`;

export const apis = {
  // createUser: (user) => instance.post("/api/signup", user),
  // createLogin: (user) => instance.post("/api/login", user),
  // getUserInfo: () => instance.get("/api/auth"),
  image: (image) => api.post('/articles/imageUpload', image),
  imageUpload: (img_url) => api_post.post("/articles/imageUpload", img_url),
  // postWrite: (items) => instance.post("/api/items", items),
  // postGet : (items) => instance.get("/api/items/", items),
  // deletePost: () => instance.delete("/api/items/:itemid"),
};
