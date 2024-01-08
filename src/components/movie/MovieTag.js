import React from 'react';
import "../../assets/css/section/_MovieLists.css";

const MovieTag = ({ onTagSelect }) => {
    return (
        <div className="movie__tag">
            <ul>
                <li><button onClick={() => onTagSelect('latest')}>최신영화</button></li>
                <li><button onClick={() => onTagSelect('popular')}>인기영화</button></li>
                <li><button onClick={() => onTagSelect('upcoming')}>개봉예정</button></li>
                <li><button onClick={() => onTagSelect('toprated')}>최고평점</button></li>
            </ul>
        </div>
    );
};

export default MovieTag;
