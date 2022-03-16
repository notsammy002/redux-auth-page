import axios from "axios";
import { loginError, loginRequest, loginSuccess } from "./auth.actions";


export const login = (params) => (dispatch) =>{
    dispatch(loginRequest());
    axios
      .post("https://reqres.in/api/login", params)
      .then((r) => {
        console.log(r.data);
        dispatch(loginSuccess(r.data));
      })
      .catch((error) =>{
        dispatch(loginError(error));
        console.log(error);
      })
}