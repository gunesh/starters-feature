import setAuthorizationToken from "./setAuthorizationToken";
// import jwtDecode from "jwt-decode";
import * as types from "../../types/types";
var client = require("./client");

export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    user,
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem("token");
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function login(data) {
  return (dispatch) => {
    return client
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((res) => {
        const token = res.data.accessToken;
        // const user = res.data.user
        const auth = res.data.auth;
        localStorage.setItem("auth", auth);
        localStorage.setItem("token", token);
        // localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem("user", "gunesh");
        setAuthorizationToken(token);
        dispatch(setCurrentUser(token))  // dispatch(setCurrentUser(jwtDecode(token)));
        return res.data.user;
      });
  };
}
