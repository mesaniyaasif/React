import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Components" element={<Home />} />
          <Route path="/Components/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;