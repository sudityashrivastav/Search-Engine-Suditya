import "../Style/Header.css";
import Categories from "./Categories";
import Results from "./Results";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header({mainData,updateData}) {
  //console.log(mainData)
  //console.log(updateData)
 let IValue = mainData.inputValue;

  //let {IValue} = data.mainData;
  const [inputData, setInputData] = useState(IValue);

  const updateValue = e => {
    setInputData(e.target.value);
  }

  const fetchData = async()=> {
    if (inputData.length < 1) {
      alert("Please type something to search")
    }
    else{
    let data = {};
    updateData({"loading": true, data,inputData});
    const res = await fetch(`https://api.scaleserp.com/search?api_key=7D9298602AD642588D04BD85CE090FC7&q=${inputData.replace(" ","+")}&hl=en`);
data = await res.json();
    updateData({loading: false, data,inputData});
    }}
  

  return (
    <div className="headContainer">
      <div className="headWrapper" >
        <Link to="/"><img className="hlogo" src="https://i.ibb.co/YcS4v07/logo-1.png" /></Link>
        <div className="fixing">
          <div className="extraWrapper" >
            <input value={inputData} onChange={updateValue} className="hinpute" type="text" placeholder="Search or type web address" />
            <img onClick={fetchData} className="headerSearch" src="https://cdn-icons-png.flaticon.com/512/875/875623.png" />
          </div>
          <Categories />
          <Results mainData={mainData} updateData={updateData} />
        </div>
      </div>
    </div>
  )
}


//searchData.search_parameters.q