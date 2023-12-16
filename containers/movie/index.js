import FeaturedMovie from '@/components/feature-movie'
import React from 'react'

const MovieContainer = ({movie}) => {
  return <FeaturedMovie movie={movie} isCompact={false}/>
}

export default MovieContainer