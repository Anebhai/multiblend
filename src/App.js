import { Route, Routes } from "react-router-dom";
import Huddle from "./Huddle-component/Huddle";
import Pizzas from "./pizzas/Pizza";

import Home from "./Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/huddle" element={<Huddle />} />
        <Route path="/pizzas" element={<Pizzas />} />
      </Routes>
    </>
  );
}

export default App;
