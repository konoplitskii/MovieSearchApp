import React from 'react';
import { Movie } from '../Movie/Movie';
import './Movies.css';
import {connect} from "react-redux";
import Preloader from "../Preloader/Preloader";


const Movies = (props) => {
    const {movies,loading} = props;
    return (
        <>
            {
                loading
                    ? <Preloader/>
                    :
                    <ul className="Movies">
                        {
                            movies.map((movie)=>{
                                return (
                                    <Movie
                                        title={movie.Title}
                                        poster={movie.Poster}
                                        year={movie.Year}
                                        id={movie.imdbID}
                                        type={movie.Type}
                                    />
                                )
                            })
                        }
                    </ul>
            }
        </>
    )
}

const mapStateToProps = (state)=> {
    return {
        movies: state.searchReducer.movies,
        loading: state.searchReducer.loading
    }
}


export default connect(mapStateToProps)(Movies);