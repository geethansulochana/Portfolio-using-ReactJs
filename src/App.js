import React from "react";

import NavBar from "./common/NavBar";
import Home from "./screens/Home";
import Projects from "./screens/Projects";
import About from "./screens/About";
import Education from "./screens/Education";
import NavBar2 from "./common/NavBar2";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Education />
      <Projects />
      <NavBar2 />
    </>
  );
}

export default App;
