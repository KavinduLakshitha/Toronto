import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Footer />
        <Routes>
          <Route path="/home" exact element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
