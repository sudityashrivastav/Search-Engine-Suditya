import Home from "./Components/Home";
import Header from "./Components/Header";
import NoteState from "/src/Context/NoteState.jsx"



import { BrowserRouter, Routes, Route} from "react-router-dom";

export default function App() {

  return (
    <NoteState>
    <BrowserRouter >
      <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/result" element={<Header />} ></Route>
      </Routes>
    </BrowserRouter>
    </NoteState>
  )
}
