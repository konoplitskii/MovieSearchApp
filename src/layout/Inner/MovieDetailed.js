import React, {useEffect} from 'react';
import './MovieDetailed.css';
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import {fetchSearchMovie, setLoading} from "../../redux/actions";
import Preloader from "../../components/Preloader/Preloader";

const MovieDetailed = (props) => {
    const params = useParams();

    console.log(props)
    useEffect(()=> {
        props.setLoading()
        props.fetchSearchMovie(params.id);
    },[])

    const {
        Actors:actors,
        Awards:awards,
        BoxOffice:box,
        Country:country,
        DVD:dvd,
        Director:director,
        Title:title,
        Poster:poster,
        imdbRating:rating,
        Year:year
    } = props.movie;

    return (
        <>
            {
                props.loading
                    ? <Preloader fullScreen={true}/>
                    :<>
                        <div className="MovieDetailed">
                            <div className="MovieDetailedShow">
                                <img src={poster}/>
                            </div>
                            <div className="MovieDetailedInfo">
                                <h2 className="MovieDetailedTitle">{title}</h2>
                                <ul className="MovieInfoList">
                                    <li><strong>Actors: </strong>{actors}</li>
                                    <li><strong>Year: </strong>{year}</li>
                                    <li><strong>IMDB Rating: </strong>{rating}</li>
                                    <li><strong>Country: </strong>{country}</li>
                                    <li><strong>Director: </strong>{director}</li>
                                    <li><strong>DVD: </strong>{dvd}</li>
                                    <li><strong>BoxOffice: </strong>{box}</li>
                                </ul>
                            </div>
                        </div>
                        <Link className="MovieLinkDetailed MovieLinkDetailedPage" to={'/'}>Back to search</Link>
                    </>
            }
        </>
    )
}

const mapStateToProps = (state)=> {
    return {
        movie:state.searchReducer.movie,
        loading:state.searchReducer.loading,
    }
}

export  default connect(mapStateToProps,{fetchSearchMovie,setLoading})(MovieDetailed);