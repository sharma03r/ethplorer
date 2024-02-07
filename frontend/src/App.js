import { useState } from "react";
import "./App.css";
import Detail from "./Components/Detail/Detail";
import Homepage from "./Components/Homepage/Homepage";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [address, setAddress] = useState("");
  const [result, setResult] = useState([]);
  const [showResult, setShowResult] = useState(false);

  function updateResult(res) {
    setResult(res);
    setShowResult(true);
  }
  function updateAddress(address) {
    setAddress(address);
  }
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        {showResult ? (
          <Detail detail={result} address={address} />
        ) : (
          <Homepage updateResult={updateResult} updateAddress={updateAddress} />
        )}
      </div>
    </div>
  );
}

export default App;
