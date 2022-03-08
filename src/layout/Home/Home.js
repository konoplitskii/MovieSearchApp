import React from 'react';
import Movies from "../../components/Movies/Movies";
import Search from "../../components/Search/Search";

const Home = ()=> {
    return (
        <>
            <h1 className="title">Movie Search App</h1>
            <Search/>
            <Movies/>
        </>
    )
}
export {Home};