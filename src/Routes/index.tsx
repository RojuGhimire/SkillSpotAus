import Homepage from "@/components/Home/Homepage";
import AdminLogin from "@/Pages/AdminLogin";
import { Route, Routes } from "react-router-dom";
import ActiveLinkContextProvider from "@/context/active-link-context";
import RPL from "@/components/Home/RPL";
import NotFound from "@/components/notfound";
import About from "@/components/Home/About";

const AppRoutes = () => {
  return (
    <div>
      <ActiveLinkContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/rpl" element={<RPL />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<NotFound />} />
        </Routes>
      </ActiveLinkContextProvider>
    </div>
  );
};

export default AppRoutes;
