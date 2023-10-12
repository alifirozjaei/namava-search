import axios from "axios";

const BASE_URL = "https://www.namava.ir/api/v3.0/search/advance";

const fetchData = async (
  moviesInitialValue,
  movieType,
  pageNumber,
  searchQuery
) => {
  let result = moviesInitialValue;
  try {
    const { data } = await axios.get(BASE_URL, {
      params: {
        type: movieType,
        count: 20,
        page: pageNumber,
        query: searchQuery,
      },
    });

    if (data.succeeded) {
      result = data.result.result_items[0].groups.Media;
    }
  } catch (error) {
    console.log(error);
    result = moviesInitialValue;
  } finally {
    return result;
  }
};

export default fetchData;
