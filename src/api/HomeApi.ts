import useSWR from "swr";

const url = "http://192.168.158.143:8080/api/v0";
const fetcher = async (url: RequestInfo | URL) => {
  const response = await fetch(url);
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
