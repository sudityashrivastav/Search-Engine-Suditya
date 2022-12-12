import Home from "./Components/Home";
import Header from "./Components/Header";
import {useState} from "react";

import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {
const [data, setData] = useState({"name": "Suditya","age": 18});


  return (
    
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home onData={setData}/>}></Route>
        <Route path="/result" element={<Header mainData={data} />} ></Route>
      </Routes>
    </BrowserRouter>
    
  )
}
