import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import GigList from "../pages/GigList";
import PostGig from "../pages/PostGig";
import GigDetail from "../pages/GigDetail";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GigList />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/post-gig" element={<PostGig />} />
      <Route path="/gigs/:id" element={<GigDetail />} />
    </Routes>
  );
};

export default AppRoutes;
