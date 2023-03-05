import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Signup from "../components/Signup";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
