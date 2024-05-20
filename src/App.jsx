import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
