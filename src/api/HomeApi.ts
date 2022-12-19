import useSWR from "swr";
import { getCookie } from "cookies-next";

const url = "http://192.168.158.143:8080/v1";
const fetcher = async (url: RequestInfo | URL, token: string) => {
  console.log(url, token)
  const response = await fetch(url, {
    headers: { "X-AUTH-TOKEN": getCookie("token") as string },
  });
  if (!response.ok) {
    const error = {
      info: await response.json(),
      status: response.status,
    };
    throw error;
  }
  return response.json();
};

function HotNewsDtos() {
  const { data, error } = useSWR(`${url}/hotnews`, fetcher);
  return { data, error };
}

export { HotNewsDtos };
