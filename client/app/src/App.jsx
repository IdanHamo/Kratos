import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/global/navbar";
import Footer from "./components/global/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
