import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Search from "./pages/Search";
import YamadaDetail from "./pages/YamadaDetail";
import SatoDetail from "./pages/SatoDetail";
import TanakaDetail from "./pages/TanakaDetail";
import SuzukiDetail from "./pages/SuzukiDetail";
import Registration from "./pages/Registration";
import Edit from "./pages/Edit";

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/yamadadetail" element={<YamadaDetail />} />
        <Route path="/satodetail" element={<SatoDetail />} />
        <Route path="/tanakadetail" element={<TanakaDetail />} />
        <Route path="/suzukidetail" element={<SuzukiDetail />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default App;
