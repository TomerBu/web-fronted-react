import axios from "axios";
import { LoginUser, RegisterUser } from "../@types/types";
 
export const baseUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";
export const usersUrl = `${baseUrl}/users`;
export const loginUrl = `${baseUrl}/users/login`;

export const register = (data: RegisterUser) => axios.post(usersUrl, data);
export const login = (data: LoginUser) => axios.post(loginUrl, data);
// import {login, register} from './auth.ts'
export const auth = {
  register, login
};
//import auth from './auth.ts'
 
export default auth;