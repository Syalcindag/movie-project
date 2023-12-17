import HomeContainer from "@/containers/home";

import { 
  getSingleCategory,
  getCategories,
  getTopRatedMovies, 
  getPopularMovies
} from "@/services/movie";

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
