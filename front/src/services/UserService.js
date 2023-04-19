import axios from "axios";
import ApiService from "./ApiService";

axios.defaults.baseURL = ApiService.url;
// let token = localStorage.getItem("token");
// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

class UserService {
  // static getUserData = async () => {
  //   return axios.post("/profile");
  // };
  static getUserData = async (token) => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios.post("/profile");
  };
}

export default UserService;
