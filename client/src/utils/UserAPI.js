import axios from "axios";

export default {
  // Sign Up Methods

  //Create User
  createUser: function(userData) {
    return axios.post("/api/users/" + userData);
  }
};