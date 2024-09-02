import {BrowserRouter, Route, Routes} from "react-router-dom";

import Home from "./pages/Home.jsx";
import NavBar from "./components/NavBar.jsx";
import ToolBar from "./components/ToolBar.jsx";
function App() {
    return (
        <BrowserRouter>
            <div className="page">
                <ToolBar/>
                <NavBar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
