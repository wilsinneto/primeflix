import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import Filme from "./pages/Filme";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/filme/:id" element={<Filme />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
