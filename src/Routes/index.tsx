import Homepage from "@/components/Pages/Homepage";
import AdminLogin from "@/Pages/AdminLogin";
import { Route, Routes } from "react-router-dom";
import ActiveLinkContextProvider from "@/context/active-link-context";
import RPL from "@/components/Pages/RPL";
import NotFound from "@/components/notfound";
import About from "@/components/Pages/About";
import ContactUS from "@/components/Pages/ContactUS";

const AppRoutes = () => {
  return (
    <div>
      <ActiveLinkContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/rpl" element={<RPL />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/error" element={<NotFound />} />
        </Routes>
      </ActiveLinkContextProvider>
    </div>
  );
};

export default AppRoutes;
