import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL DA API: /movie/now_playing?api_key=7022985cba54443ac2a2d484383f6fff&language=pt-BR

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default api;
