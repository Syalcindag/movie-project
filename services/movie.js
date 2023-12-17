const API_URL = 'https://api.themoviedb.org/3';
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  }
};

const fetchMovieApi = async (pathname, query = '') => {
    try {
        const res = await fetch(`${API_URL}${pathname}${query}`,OPTIONS);
        return res.json();

    } catch (error) {
        throw new Error(`Error : ${error} ` )
    }
    
}

const getSingleCategory = async (genre) => {
    return fetchMovieApi('/discover/movie', `?with_genres=${genre}`);
  }
  
  const getCategories = async () => {
    return fetchMovieApi('/genre/movie/list', '?page=1');
  }
  
  const getTopRatedMovies = async () => {
    return fetchMovieApi('/movie/top_rated', '?page=1');
  }
  
  const getPopularMovies = async () => {
    return fetchMovieApi('/movie/popular', '?page=1');
  }

  const getMovie = async (movieId) => {
    return fetchMovieApi(`/movie/${movieId}`);
  }

export {
    getSingleCategory,
    getCategories,
    getTopRatedMovies, 
    getPopularMovies,
    getMovie
};