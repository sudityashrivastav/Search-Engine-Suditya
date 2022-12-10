import "../Style/Header.css";
import Categories from "./Categories";
import Results from "./Results";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


export default function Header() {

  const [searchData, setSearchtData] = useState({});
  const [inputData, setInputData] = useState("hello");

  const updateValue = e => {
    setInputData(e.target.value);
  }
  console.log(searchData);

  async function suditya() {
  console.log("Clicked")
  const url = `https://api.scaleserp.com/search?api_key=DB608EF6AFE64AF6A4AD2B837CF7E3D8&q=${inputData}&hl=en`;
    const mainData = await axios.get(url);
  if (mainData) {
    setSearchtData(mainData);
console.log(mainData)
  }
    
  }
  

  return (
    <div className="headContainer">
      <div className="headWrapper" >
        <Link to="/"><img className="hlogo" src="src/Images/logo.png" /></Link>
        <div className="fixing">
          <div className="extraWrapper" >
            <input value={inputData} onChange={updateValue} className="hinpute" type="text" placeholder="Search or type web address" />
            <img className="headerSearch" src="src/Images/search.png" onClick={suditya} />
          </div>
          <Categories />
          <Results data={searchData.data}/>
        </div>
      </div>
    </div>
  )
}


//searchData.search_parameters.q