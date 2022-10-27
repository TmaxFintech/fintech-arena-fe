import useSWR from "swr"

const url = "http://192.168.158.143:8080/api/v0"

function HotNewsDtos() {
  const { data, error } = useSWR(`${url}/hotnews`, (...args) =>
    fetch(...args).then((res) => res.json())
  )
  return data
}

export { HotNewsDtos }
