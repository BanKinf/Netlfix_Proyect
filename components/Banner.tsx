import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Movie } from '../typings';

interface Props {
    netflixOriginals: Movie[]
}

function Banner({netflixOriginals}: Props) {
    const [movie, setMovie] = useState<Movie | null>(null)

    useEffect(() => {
        setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
    },[netflixOriginals]);

  return (
    <div>
      <div>
        <Image src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}/>
      </div>
    </div>
  )
}

export default Banner