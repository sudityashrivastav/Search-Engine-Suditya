import NoteContext from "./NoteContext.jsx";
import axios from "axios";
import {useState} from "react";


const NoteState = (props)=> {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const fetchData = async ()=> {    
   //alert("working");
    const url = `https://api.scaleserp.com/search?api_key=DB608EF6AFE64AF6A4AD2B837CF7E3D8&q=hello&hl=en`;
    const mainData = await axios.get(url);
    setData(mainData.data);
    setLoading(false);
  }

   return (
  <NoteContext.Provider value={{fetchData,data,loading}}>
    {props.children}
     </NoteContext.Provider>
   )
}

export default NoteState;