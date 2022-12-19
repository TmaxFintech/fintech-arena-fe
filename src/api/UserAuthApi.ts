import useSWR from "swr";
import axios from "axios";
import { UserInfoType, UserLoginType } from "src/types/UserType";

const url = "http://192.168.158.143:8080/v1";

function UserLogin(data: UserLoginType) {
  return axios.post(
    `${url}/signin?password=${data.password}&username=${data.username}`
  );
}

function UserJoin(data: UserInfoType) {
  return axios.post(`${url}/signup`, data);
}

export { UserLogin, UserJoin };
