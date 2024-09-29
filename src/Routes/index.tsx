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
import ApplicationForm from "@/components/sections/Form/Applynow";
import ApplicationForm2 from "@/components/sections/Form/Enroll";
import { DashboardLayout } from "@/Dashboard/DashboardLayout";
import { BlogPost } from "@/Dashboard/Blog/Blogpost";
import CreateBlog from "@/Dashboard/Blog/CreateBlog";
import { ClientLayout } from "@/ClientPortal/ClientLayout";
import PersonalInfoForm from "@/ClientPortal/PersonalInfo";

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
          <Route path='/applynow' element={<ApplicationForm />} />
          <Route path='/enroll' element={<ApplicationForm2 />} />
          <Route path='/blogpost' element={<BlogPost />} />
          <Route path='/Createblogpost' element={<CreateBlog />} />
          <Route path='/PersonalInfo' element={<PersonalInfoForm />} />
          <Route path='/dashboard' element={<DashboardLayout children={undefined} />} />
          <Route path="/client" element={<ClientLayout children={undefined}/>} />

          


        </Routes>
      </ActiveLinkContextProvider>
    </div>
  );
};

export default AppRoutes;
