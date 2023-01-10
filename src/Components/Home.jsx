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
    const res = await fetch(`https://api.scaleserp.com/search?api_key=7D9298602AD642588D04BD85CE090FC7&q=${inputValue.replace(" ","+")}&hl=en`);
data = await res.json();
    onData({loading: false, data,inputValue});
    }}

    return (<>
      <div className="homeContainer">
        <img className="logo" src="https://i.ibb.co/YcS4v07/logo-1.png"/>
        <div className="wrapper">
          
          <input id="wage" type="text" value={inputValue} onKeyDown={handleKeyDown} onChange={(e)=>setInputValue(e.target.value)} placeholder="Search anything" className="input"/>
          <Link className="sk" onClick={fetchData} to={inputValue.length > 0? "/result" : null}>
            <img id="search" alt="image" className="homeSearch" src="https://cdn-icons-png.flaticon.com/512/875/875623.png" />
          </Link>
        </div>
      </div>
    </>)
  }

export default memo(Home)