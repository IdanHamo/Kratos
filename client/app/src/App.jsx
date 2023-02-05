import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/global/navbar";
import Footer from "./components/global/footer";

function App() {
  return (
    <div className="App flex flex-col min-h-screen">
      <header>
        <Navbar></Navbar>
      </header>
      <div className="grow"></div>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
