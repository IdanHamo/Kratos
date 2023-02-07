import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/global/navbar";
import Footer from "./components/global/footer";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home";
import Registration from "./components/authentication/registration";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Registration />}></Route>
        </Routes>
      </div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
