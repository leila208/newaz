import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./Responsive.css";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Content from "./pages/Content";
import AboutUs from "./pages/AboutUs";
import Questions from "./pages/Questions";
import FilterCategories from "./pages/FilterCategories";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import { useEffect } from "react";
AOS.init();
function App() {
  let loc = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [loc.pathname]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Content />} />
        <Route path="/blogdetails/:slug" element={<BlogDetails />} />
        <Route path="/blogs/:slug" element={<FilterCategories />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;




