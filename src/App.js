import { Route, Routes } from "react-router-dom";
import Huddle from "./Huddle-component/Huddle";

import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/huddle" element={<Huddle />} />
      </Routes>
    </>
  );
}

export default App;
