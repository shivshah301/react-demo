import logo from "./logo.svg";
import "./App.css";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Leftnav from "./Component/Sidenav/Leftnav/Leftnav";
import Rightnav from "./Component/Sidenav/Rightnav/Rightnav";
import Home from "./Component/Body/Page/Home/Home";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Header />

      <div className="divider">
        <div className="divider-left">
          <Leftnav />
        </div>
        <div className="divider-body">
          <Home></Home>
        </div>
        <div className="divider-right">
          <Rightnav />
        </div>
      </div>

      <div className="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
