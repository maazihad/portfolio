import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar/Navbar";
import Footer from "../components/Shared/Footer/Footer";

const MainLayout = () => {
   return (
      <div className="">
         <Navbar />
         <Outlet />
         <Footer />
      </div>
   );
};

export default MainLayout;