import "./App.css";

import * as React from "react";
import * as Structure from "./components/WebsiteStructure.jsx";

// import {
//   Header,
//   MainContent,
//   ProductSection,
//   FAQ,
//   Footer,
// } from "./components/WebsiteStructure.jsx";
function App() {
  return (
    <>
        <Structure.Header />
        <Structure.MainContent />
        <Structure.ProductSection />
        <Structure.FAQ />
        <Structure.Footer />
    </>
  );
}

export default App;
