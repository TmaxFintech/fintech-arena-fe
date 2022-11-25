import useSWR from "swr";
import axios from "axios";
import { UserInfoType, UserLoginType } from "src/types/UserType";

const url = "http://192.168.158.143:8080/api/v0";

function UserLogin(data: UserLoginType) {
  return axios.post(`${url}/login`, data);
}

function UserJoin(data: UserInfoType) {
  return axios.post(`${url}/join`, data);
}

export { UserLogin, UserJoin };
