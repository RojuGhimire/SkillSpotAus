import Homepage from "@/Pages/Homepage";
import { Route, Routes } from "react-router-dom";
import ActiveLinkContextProvider from "@/context/active-link-context";
import RPL from "@/Pages/RPL";
import NotFound from "@/components/notfound";
import About from "@/Pages/About";
import ContactUS from "@/Pages/ContactUS";
import Login from "@/Pages/Login";

const AppRoutes = () => {
  return (
    <div>
      <ActiveLinkContextProvider>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rpl" element={<RPL />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUS />} />
          <Route path="/error" element={<NotFound />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </ActiveLinkContextProvider>
    </div>
  );
};

export default AppRoutes;
