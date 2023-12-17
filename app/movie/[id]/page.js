import MovieContainer from '@/containers/movie'
import React from 'react'
import { notFound } from 'next/navigation'

const API_URL = 'https://api.themoviedb.org/3';
const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
  }
};

const getMovie = async (movieId) => {
  const res = await fetch(`${API_URL}/movie/${movieId}`, OPTIONS);
  return res.json();
}

const MoviePage = async ({params, searchParams}) => {
  const movieDetail = await getMovie(params.id);
  if (!movieDetail) {
    notFound();
  }

  if (searchParams.error == "true") {
    throw new Error('Error Happened');
  }

  return (
    <MovieContainer movie={movieDetail}/>
  )
}

export default MoviePage