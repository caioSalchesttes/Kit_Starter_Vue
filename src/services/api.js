import axios from "axios";
const token = await localStorage.getItem("token");

const auth = axios.create({
  baseURL: "http://biochat-api.test/api/",
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    enctype: "multipart/form-data",
    Authorization: "Bearer " + token,
  },
});

const guest = axios.create({
  baseURL: "http://biochat-api.test/api/",
  Headers: {
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    enctype: "multipart/form-data",
  },
});

export { auth, guest };
