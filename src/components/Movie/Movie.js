import React from 'react';
import './Movie.css';
import {Link, useParams} from "react-router-dom";

const Movie = ({title,poster,year,id,type}) => {
    const params = useParams();
    console.log(params);
    return (
        <li className="Movie" key={id}>
            <div className="MovieShow">
                <img className="MovieSmallImg" src={poster} alt={title}/>
            </div>
            <span>{year}</span>
            <h3 className="MovieTitle">{title}</h3>
            <Link to={`/movie/${id}`} className="MovieLinkDetailed">info</Link>
        </li>
    )
}

export {Movie};