import React from 'react';
import './Search.css';
import {connect} from "react-redux";
import {fetchSearch, searchActionText, setLoading} from "../../redux/actions";


const Search = (props) => {
    const searchNow = (e)=> {
        e.preventDefault();
        props.fetchSearch(props.text);
        props.setLoading();
    }
    return(
        <div className="Search">
            <form className="SearchForm" onSubmit={(e)=>searchNow(e)}>
                <div className="SearchWrapper">
                    <input className="SearchField"
                           type="text"
                           placeholder="Search..."
                           onChange={(e)=> props.searchActionText(e.target.value)}/>
                    <button className="SearchButton">Search</button>
                </div>
            </form>
        </div>
    )
}

const mapStateToProps = (state)=> {
    return {
        text:state.searchReducer.searchText
    }
}


export default connect(mapStateToProps,{searchActionText,fetchSearch,setLoading})(Search);