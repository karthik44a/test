import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Test from "../components/Test";
import MainHome from "../components/MainHome";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Home />} />
      <Route path="/" element={<MainHome />} />
      <Route path="/admin/test" element={<Test />} />
    </Routes>
  );
};

export default AllRoutes;
