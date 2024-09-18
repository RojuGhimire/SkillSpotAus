import Homepage from "@/Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import ActiveLinkContextProvider from "@/context/active-link-context";
import RPL from "@/Pages/RPL";
import NotFound from "@/components/notfound";
import About from "@/Pages/About";
import ContactUS from "@/Pages/ContactUS";
import Login from "@/Pages/Login";
import Blog from "@/Pages/Blog";
import ScrollToTop from "@/components/ScrollToTop";
import BlogDetail from "@/Pages/BlogDetail";
import { Dashboard } from "@/components/Dashboard/Dashboard";

const AppRoutes = () => {
  return (
    <div>
      <ActiveLinkContextProvider>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rpl" element={<RPL />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogdetail" element={<BlogDetail />} />
          <Route path="/error" element={<NotFound />} />
          <Route path='/login' element={<Login />} />
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </ActiveLinkContextProvider>
    </div>
  );
};

export default AppRoutes;
