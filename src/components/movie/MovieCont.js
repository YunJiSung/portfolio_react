import React from 'react';
import "../../assets/css/section/_MovieLists.css";


const MovieCont = ({ movies }) => {
    return (
        <section className="movie__cont">
            <h2 className="blind">영화</h2>
            <div className='movie'>
                {movies.map(movie => (
                    <div className="movie" key={movie.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default MovieCont;
