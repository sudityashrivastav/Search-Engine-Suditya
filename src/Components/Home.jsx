import "../Style/Home.css";
import Loading from "./Loading.jsx";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = ({onData})=> {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(true);
  
  const handleKeyDown = (e) => {
    if (e.code === "Enter") {  
document.getElementById("search").click();
    }
  }
  const fetchData = async()=> {
    //alert("Clicked");
    if (inputValue.length < 1) {
      alert("Please type something to search")
    }
    else{
    let data = {};
    onData({"loading": true, data});
    const res = await fetch(`https://api.scaleserp.com/search?api_key=0ABC2A01BD3C470CBC92D3EFFEAC86F0&q=${inputValue}&hl=en`);
data = await res.json();
    onData({loading: false, data});
    }}
  //useEffect(()=>{
    //fetchData();
    //eslint-disable-next-line
  //},[])

    return (<>
      <div className="homeContainer">
        <img className="logo" src="src/Images/logo.png" />
        <div className="wrapper">
          <img alt="this is an image" className="homeSearch white" src="src/Images/voice.png" />
          <input id="wage" type="text" value={inputValue} onKeyDown={handleKeyDown} onChange={(e)=>setInputValue(e.target.value)} placeholder="Search or type web address" className="input"/>
          <Link className="sk" onClick={fetchData} to={inputValue.length > 0? "/result" : null}>
            <img id="search" alt="this is an image" className="homeSearch" src="src/Images/search.png" />
          </Link>
        </div>
      </div>
    </>)
  }

export default Home;