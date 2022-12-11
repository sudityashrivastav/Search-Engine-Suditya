import "../Style/Home.css";
import Loading from "./Loading.jsx";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {useContext} from "react";
import NoteContext from "/src/Context/NoteContext.jsx";

const Home = ()=> {
  
 const a = useContext(NoteContext);
  console.log(a)
  const [loading, setLoading] = useState(false);
  
  const handleKeyDown = (e) => {
    if (e.code === "Enter") {  
    document.getElementById("search").click();
    }
  }

  useEffect(() => {
    setLoading(true)
    //console.log(data);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

    return (<div style={{height:"100vh"}}>
      {loading ? (<Loading/>) : (<div className="homeContainer">
        <img className="logo" src="src/Images/logo.png" />
        <div className="wrapper">
          <img alt="this is an image" className="homeSearch white" src="src/Images/voice.png" />
          <input id="wage" type="text" onKeyDown={handleKeyDown} placeholder="Search or type web address" className="input"/>
          <Link className="sk" onClick={a.fetchData} to="/result">
            <img id="search" alt="this is an image" className="homeSearch" src="src/Images/search.png" />
          </Link>
        </div>
      </div>)}
    </div>)
  }

export default Home;