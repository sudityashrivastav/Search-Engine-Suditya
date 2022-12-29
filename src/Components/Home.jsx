import "../Style/Home.css";
import {useState,memo} from "react";
import { Link } from "react-router-dom";

const Home = ({onData})=> {
  const [inputValue, setInputValue] = useState("");
  // alert("i am loaded")
  
  const handleKeyDown = (e) => {
    if (e.code === "Enter") {  
document.getElementById("search").click();
    }
  }

  const fetchData = async()=> {
    if (inputValue.length < 1) {
      alert("Please type something to search")
    }
    else{
    let data = {};
    onData({"loading": true, data,inputValue});
    const res = await fetch(`https://api.scaleserp.com/search?api_key=83E0A560F7E7495BAB2F6538E9110DD4&q=${inputValue.replace(" ","+")}&hl=en`);
data = await res.json();
    onData({loading: false, data,inputValue});
    }}

    return (<>
      <div className="homeContainer">
        <img className="logo" src="src/Images/logo.png" />
        <div className="wrapper">
          <img alt="this is an image" className="homeSearch white" src="src/Images/voice.png" />
          <input id="wage" type="text" value={inputValue} onKeyDown={handleKeyDown} onChange={(e)=>setInputValue(e.target.value)} placeholder="Search anything" className="input"/>
          <Link className="sk" onClick={fetchData} to={inputValue.length > 0? "/result" : null}>
            <img id="search" alt="this is an image" className="homeSearch" src="src/Images/search.png" />
          </Link>
        </div>
      </div>
    </>)
  }

export default memo(Home)