import Categories from '@/components/categories'
import  FeatureMovieLoading  from '@/components/feature-movie/loading'
import MoviesSectionLoading from '@/components/movies-section/loading'
import React from 'react'



const Loading = () => {
  return (
    <div>
        <FeatureMovieLoading/>
        <Categories />
        <MoviesSectionLoading/>
        <MoviesSectionLoading/>
        <MoviesSectionLoading/>
    </div>
  )
}

export default Loading