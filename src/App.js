import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Programs from "./Components/Programs";

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showPrograms, setShowPrograms] = useState(true);

  return (
    <div className="App">
      <Header
        setShowAbout={setShowAbout}
        showAbout={showAbout}
        showPrograms={showPrograms}
        setShowPrograms={setShowPrograms}
      ></Header>
      {showAbout && <About></About>}
      {showPrograms && <Programs></Programs>}
      <div className="bg-stone-100 shadow-sm">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
