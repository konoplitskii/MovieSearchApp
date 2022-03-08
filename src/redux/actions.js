import {FETCH_MOVIE, FETCH_MOVIES, LOADING, SEARCH_TEXT} from "./types";
import axios from "axios";

export const searchActionText = (text) => {
    return {
        type: SEARCH_TEXT,
        payload: text
    }
}

export const fetchSearch = (text)=> dispatch => {
    axios.get(`https://www.omdbapi.com/?apikey=abe5101a&s=${text}`)
        .then(response => dispatch(
            {type:FETCH_MOVIES,
                payload:response.data.Search})
        )
        .catch(err=> console.log(err))
}


export const fetchSearchMovie = (id)=> dispatch => {
    axios.get(`https://www.omdbapi.com/?apikey=abe5101a&i=${id}`)
        .then(response => dispatch(
            {type:FETCH_MOVIE,
                payload:response.data})
        )
        .catch(err=> console.log(err))
}


export const setLoading = ()=> {
    return {
        type: LOADING,
        payload: true
    }
}