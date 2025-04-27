import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import RoutesApp from "./routes";

function App() {
  return (
    <Router>
      <Header />
      <RoutesApp /> {}
    </Router>
  );
}

export default App;
