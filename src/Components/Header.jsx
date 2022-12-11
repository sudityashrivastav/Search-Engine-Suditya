import "../Style/Header.css";
import Categories from "./Categories";
import Results from "./Results";
import axios from 'axios';
import { data } from "/src/Data/fetchData.js"

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Header() {

  const [searchData, setSearchtData] = useState(data);
  const [inputData, setInputData] = useState("hello");

  const updateValue = e => {
    setInputData(e.target.value);
  }
  

  return (
    <div className="headContainer">
      <div className="headWrapper" >
        <Link to="/"><img className="hlogo" src="src/Images/logo.png" /></Link>
        <div className="fixing">
          <div className="extraWrapper" >
            <input value={inputData} onChange={updateValue} className="hinpute" type="text" placeholder="Search or type web address" />
            <img className="headerSearch" src="src/Images/search.png" />
          </div>
          <Categories />
          <Results xdata={searchData} />
        </div>
      </div>
    </div>
  )
}


//searchData.search_parameters.q