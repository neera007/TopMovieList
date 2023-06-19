import React from 'react'
const Movie=(props) => {
  return (
    <div className="movie">
        <img src={props.image} alt="Movie_image" />
        <div className='movie_description'>
            <p>Title : {props.title}</p>
            <p>Year : {props.year} </p>
        </div>
    </div>
  )
}
export default Movie

