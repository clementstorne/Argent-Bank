import axios from "axios";
import ApiService from "./ApiService";

axios.defaults.baseURL = ApiService.url;

/**
 * Service for login and session management.
 */
class AuthService {
  /**
   * Logs the user in.
   * @param   {Object}  credentials           The body of the request.
   * @param   {String}  credentials.email     The user's email.
   * @param   {String}  credentials.password  The user's password.
   * @return  {String}                        JSON Web Token.
   */
  static login = async (credentials) => {
    return axios.post("/login", credentials);
  };

  /**
   * Saves the token into the local storage.
   * @param   {String}  token  JSON Web Token.
   */
  static saveToken = (token) => {
    localStorage.setItem("token", token);
  };

  /**
   * Logs the user out.
   */
  static logout = () => {
    localStorage.removeItem("token");
  };

  /**
   * Détermine if the user is logged in or not.
   * @return  {Boolean}  True if the user is logged in, false if not.
   */
  static isLogged = () => {
    const token = localStorage.getItem("token");
    return !token ? false : true;
  };
}

export default AuthService;
