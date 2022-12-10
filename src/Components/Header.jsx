import "../Style/Header.css";

import Categories from "./Categories";
import Results from "./Results";
import axios from 'axios';

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {data} from "/src/Data/fetchData3.js"


export default function Header() {

  //const [searchData, setSearchtData] = useState(data);
  const [inputData, setInputData] = useState("hii");
   console.log("Data file " + data);
  

  //searchData.search_parameters.q


  const updateValue = e => {
    setInputData(e.target.value);
  }
/*
  const fetchData = async () => {
  console.log("Started")
  
    const url = "https://api.scaleserp.com/search?api_key=03C15BCA6BD9467784AAC410C4C348FF&q=scam&hl=en";
    const res = await fetch(url);
    const data = await res.json();
    console.log("Noooo " + data);
    console.log(url)
    // setSearchtData(newData);

  }*/

  // useEffect(async () => {
  //   console.log("i am working");
  //   let url = `https://api.scaleserp.com/search?api_key=03C15BCA6BD9467784AAC410C4C348FF&q=${inputData}&hl=en`;
  //   let res = await fetch(url);
  //   let newData = await res.json();
  //   console.log("fetched data " + newData); 
  //   setSearchtData(newData);

  // }, []);

  async function suditya() {
  console.log("Clicked")
  const url = `https://api.scaleserp.com/search?api_key=DB608EF6AFE64AF6A4AD2B837CF7E3D8&q=${inputData}&hl=en`;
  //const res = await fetch(url);
  //const mainData = await res.json();

    const mainData = await axios.get(url);
    console.log(mainData);
  const data = {mainData};
  //  setSearchtData({data});
    
  
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
          <Results data={data}/>
        </div>
      </div>
    </div>
  )
}