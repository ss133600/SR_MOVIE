const fetch = require("node-fetch");

const url = "https://api.themoviedb.org/3/";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YWFiYjc4MjdmMjBiZTMwZDI0YmI0MDgxYWMwYzJiNCIsInN1YiI6IjY1NGIzYTNiNTMyYWNiNTMzNzFlZGRlMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7BfxUme6gI83bw1Ib86AMcg_rzFWUxW8JLj6yV_tyWk",
  },
};

fetch(url, options)
  .then((res) => res.json())
  .then((json) => console.log(json))
  .catch((err) => console.error("error:" + err));
