import React from "react";
import { Home } from "./layout/Home/Home";
import  MovieDetailed  from "./layout/Inner/MovieDetailed";
import {Routes, Route} from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="container">
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='movie/:id' element={<MovieDetailed/>}/>
            </Routes>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
