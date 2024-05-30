import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Game from "./pages/Game";
import Home from "./pages/Home";

function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="game" element={<Game />} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
