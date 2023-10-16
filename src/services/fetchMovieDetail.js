import axios from "axios";

const fetchMovieDetail = async (id) => {
  try {
    const { data } = await axios.get(
      `https://www.namava.ir/api/v1.0/medias/${id}/brief-preview`
    );
    return data.result;
  } catch (error) {
    console.log("Error in fetch movie detail", error);
    return {
      id: null,
      hit: null,
      year: null,
      imdb: null,
      hasPersianSubtitle: null,
      dubsType: null,
    };
  }
};

export default fetchMovieDetail;
