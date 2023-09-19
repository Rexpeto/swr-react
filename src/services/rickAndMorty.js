export const rickAndMorty = "https://rickandmortyapi.com/api/character";

export const getCharacters = async (url) => {
  return await fetch(url).then((res) => res.json());
};
