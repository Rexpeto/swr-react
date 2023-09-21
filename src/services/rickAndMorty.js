import axios from "axios";

export const rickAndMortyUrl = "https://rickandmortyapi.com/api/character";

export const getCharacters = async (url) => {
  const { data } = await axios(url);
  return data;
};
