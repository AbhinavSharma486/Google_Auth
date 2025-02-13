import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import SignUp from "../pages/SignUp.jsx";
import SignIn from "../pages/SignIn.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import Header from "../components/Header.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
