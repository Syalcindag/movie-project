import HomeContainer from "@/containers/home";

const API_URL = 'https://api.themoviedb.org/3';
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  }
};

const getSingleCategory = async (genre) => {
  const res = await fetch(`${API_URL}/discover/movie?with_genres=${genre}`, OPTIONS);
  return res.json();
}

const getCategories = async () => {
  const res = await fetch(`${API_URL}/genre/movie/list?page=1`, OPTIONS);
  return res.json();
}

const getTopRatedMovies = async () => {
  const res = await fetch(`${API_URL}/movie/top_rated?page=1`, OPTIONS);
  return res.json();
}

const getPopularMovies = async () => {
  const res = await fetch(`${API_URL}/movie/popular?page=1`, OPTIONS);
  return res.json();
}

export default async function Home({params}) {
    let selectedCategory;

    const topRatedPromise = await getTopRatedMovies();
    const popularPromise = await getPopularMovies();
    const categoriesPromise = await getCategories();

    const [{results: topRatedMovies}, {results: popularMovies}, {genres : categories}] = await Promise.all([
      topRatedPromise,
      popularPromise,
      categoriesPromise
    ])

    if (params.category?.length > 0) {
        const { results } = await getSingleCategory(params.category[0]);
        selectedCategory = results;
    }
  return (
    <HomeContainer 
    topRatedMovies = {topRatedMovies}
    popularMovies = {popularMovies}
    categories = {categories}
    selectedCategory={{
        id: params.category?.[0] ?? '',
        movies: selectedCategory ? selectedCategory.slice(0,7) : [],
    }}/>
  )
}
