import "../Style/Home.css";
import Loading from "./Loading.jsx";
//import {data} from "/server2.js";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";



export default function Home() {
  const handleKeyDown = (e) => {
    if (e.code === "Enter") {  
      console.log("Enter key has been pressed!");
      document.getElementById("search").click();
    }
  }

  const fetchData = async ()=>{
    
const url = "https://api.scaleserp.com/search?api_key=03C15BCA6BD9467784AAC410C4C348FF&q=scam&hl=en";

    const axios = require('axios').default;
    axios.get(url)
  .then(function (response) {
    // handle success
    alert(response);
  })


    /*
    const res = await fetch(url);
    const data = await res.json();
   await alert(data)
*/
    
  }

    
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    //setLoading(true)
    //console.log(data);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  

    return (<>
      {loading ? (<Loading/>) : (<div className="homeContainer">
        <img className="logo" src="src/Images/logo.png" />
        <div className="wrapper">
          <img alt="this is an image" className="homeSearch white" src="src/Images/voice.png" />
          <input id="wage" type="text" onKeyDown={handleKeyDown} placeholder="Search or type web address" className="input" />
          <Link onClick={fetchData} to="/result">
            <img id="search" alt="this is an image" className="homeSearch" src="src/Images/search.png" />
          </Link>
        </div>
      </div>)}
    </>)
  }