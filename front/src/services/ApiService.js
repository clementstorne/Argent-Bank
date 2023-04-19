import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
let token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

class ApiService {
  static url = "http://localhost:3001/api/v1/user";
}

export default ApiService;
