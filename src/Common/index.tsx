import { HiOutlineBars3 } from "react-icons/hi2";
import { BiCategoryAlt } from "react-icons/bi";
import { IoNewspaperOutline } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { FaHandHolding, FaUsers } from "react-icons/fa";
export const Dashboard_sidebar_links = [

  {
    key:"2",
    label: " Founder",
    path: "/viewfounder",
    icon: <FaUsers />,
  },
  {
    key:"3",
    label: " Partnership ",
    path: "/viewpartnership",
    icon: <FaHandHolding />,
  },
  {
    key:"4",
    label: " Testimonial ",
    path: "/viewtestimonial",
    icon: <HiOutlineBars3 />,
  },

  {
    key:"5",
    label: "Category ",
    path: "/viewcategory",
    icon: <BiCategoryAlt />,
  },

  {
    key:"7",
    label: " Blog ",
    path: "/viewnews",
    icon: <IoNewspaperOutline />,
  },

  {
    key:"9",
    label: "Success Story ",
    path: "/viewsuccessstory",
    icon: <AiOutlineProject />,
  },
  {
    key:"12",
    label: "Project ",
    path: "/viewproject",
    icon: <AiOutlineProject />,
  },

  {
    key:"14",
    label: "Certificate ",
    path: "/viewcertificate",
    icon: <AiOutlineProject />,
  },
  {
    key:"15",
    label: "Gallery ",
    path: "/viewgallery",
    icon: <AiOutlineProject />,
  },
  {
    key:"16",
    label: "HomeBanner ",
    path: "/viewhomebanner",
    icon: <AiOutlineProject />,
  },

];

