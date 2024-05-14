import About from "./views/About";
import Blogs from "./views/Blogs";
import Contact from "./views/Contact";
import Experience from "./views/Experience";
import Header from "./views/Header";
import Navigation from "./views/Navigation";
import Projects from "./views/Projects";
import "../src/App.css";
import { useEffect, useState, CSSProperties } from "react";
import PropagateLoader from "react-spinners/PropagateLoader";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  return (
    <div className="App">

      {loading ? (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "auto", textAlign: "center", marginTop: "350px" }}>
          <PropagateLoader
            color="#37383B"
            loading={loading}
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"

          />
        </div>

      ) : (
        <div>
          <Navigation />
          <Header />
          <About />
          <Experience />
          <Projects />
          <Blogs />
          <Contact />
        </div>
      )}
    </div>
  );
}

export default App;
