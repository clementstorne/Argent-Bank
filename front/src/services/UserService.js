import axios from "axios";
import ApiService from "./ApiService";

axios.defaults.baseURL = ApiService.url;

/**
 * Service for user data.
 */
class UserService {
  /**
   * Fetches the user data from DB.
   * @return  {Promise}
   */
  static getUserData = async () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios.post("/profile");
  };

  /**
   * Update the user's data in DB.
   * @param   {Object}  credentials            The body of the request.
   * @param   {String}  credentials.firstName  The firstname to be updated.
   * @param   {String}  credentials.lastName   The last to be updated.
   */
  static updateUserData = async (credentials) => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    return axios.put("/profile", credentials);
  };
}

export default UserService;
