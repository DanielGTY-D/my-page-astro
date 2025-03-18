import axios from "axios"
import type { FilterTopAnimeProps, TopAnime } from "./interfaces";
import { filterTopAnime } from "./interceptor";

const getTopAnime = async (): Promise<FilterTopAnimeProps[]> => {
  try {
    const response = await axios.get("https://api.jikan.moe/v4/top/anime");
    const data = filterTopAnime(response.data.data);
    return data
  } catch (error) {
    console.log("error al obtener top animes" + " " + error);
    return Promise.reject(error);
  }
}


export {
  getTopAnime
}