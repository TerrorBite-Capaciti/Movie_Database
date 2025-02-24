const API_KEY = "f4e3711c";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMoviesByTitle = async (title, type = "") => {
  try {
    const url = `${BASE_URL}?t=${title.replace(/ /g, "+")}&type=${type}&apikey=${API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data from OMDb API.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    return null;
  }
};
