import Homepage from "@/components/Home/Homepage";
import AdminLogin from "@/Pages/AdminLogin";
import { Route, Routes } from "react-router-dom";
import ActiveLinkContextProvider from "@/context/active-link-context";
import RPL from "@/components/Home/RPL";

const AppRoutes = () => {
  return (
    <div>
      <ActiveLinkContextProvider>
      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path ='/rpl' element={<RPL />} />
      </Routes>
      </ActiveLinkContextProvider >
    </div>
  );
};

export default AppRoutes;
