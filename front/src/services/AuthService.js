import axios from "axios";
import ApiService from "./ApiService";

axios.defaults.baseURL = ApiService.url;

class AuthService {
  static login = async (credentials) => {
    return axios.post("/login", credentials);
  };

  static saveToken = (token) => {
    localStorage.setItem("token", token);
  };

  static logout = () => {
    localStorage.removeItem("token");
  };

  static isLogged = () => {
    const token = localStorage.getItem("token");
    return !!token;
  };
}

export default AuthService;
