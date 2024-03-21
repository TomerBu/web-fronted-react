import axios from "axios";
import { RegisterUser } from "../@types/types";

//
export const baseUrl = "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";
export const usersUrl = `${baseUrl}/users`;

export const register = (data: RegisterUser) => axios.post(usersUrl, data);
// import {register} from './auth.ts'


export const auth = {
  register,/*login*/
};


export default auth;