import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/*" element={<div>Not Found</div>} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
