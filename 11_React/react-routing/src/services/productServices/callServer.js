import axios from "axios";

export function callServer(url, method, data) {
  return fetch(url, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}
export function callServerWithAxios(url, method, data) {
  return axios({
    method: method,
    url: url,
    data: data,
  });
}

callServer("https://dummyjson.com/products/4", "GET").then((data) => {
  console.log(data);
});

callServerWithAxios("https://dummyjson.com/products/4", "GET").then((data) => {
  console.log(data);
});
