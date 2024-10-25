import React from "react";

const MovieCard = ({movie}) => {
    console.log(movie)
    return(
        <div className='movie'>
            <div>
              <p className=''>{movie.Year}</p>
            </div>
            <div>
              <img src={movie.Poster !== 'N/A' ? movie.Poster : `https://picsum.photos/id/1/200/300`} alt={movie.Title} />
            </div>
            <div className=''>
              <span>{movie.Type}</span>
              <h3>{movie.Title}</h3>
            </div>
          </div>
    )
}

export default MovieCard;