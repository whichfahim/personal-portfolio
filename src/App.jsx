import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
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
