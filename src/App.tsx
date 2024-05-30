import './App.css'
import {BrowserRouter} from "react-router-dom";
import {ReactNode} from "react";


function Routes(props: { children: ReactNode }) {
  return null;
}

function Route(props: { index: boolean, element: JSX.Element }) {
  return null;
}

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
