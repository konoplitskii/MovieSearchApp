import {FETCH_MOVIE, FETCH_MOVIES, LOADING, SEARCH_TEXT} from "../types";


const initialState = {
    movies:[],
    searchText:'',
    movie:[],
    loading: false
}

const searchReducer = (state= initialState, action)=> {
    switch (action.type) {
        case SEARCH_TEXT :
            return {
                ...state,
                searchText: action.payload,
                loading:false
            }
        case FETCH_MOVIES :
            return {
                ...state,
                movies: action.payload,
                loading:false
            }
            case FETCH_MOVIE :
            return {
                ...state,
                movie: action.payload,
                loading:false
            }
        case LOADING :
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state
    }
}

export default searchReducer;