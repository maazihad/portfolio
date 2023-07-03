import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Message from "./Message";
import Skills from "./Skills";
import Strength from "./Strength";

const Home = () => {
   return (
      <>
         <Helmet>
            <title>Md. Abul Asad Zihad | Home</title>
         </Helmet>
         <Banner />
         <Strength />
         <Skills />
         <Message />
      </>
   );
};

export default Home;