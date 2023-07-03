import moment from "moment/moment";
import Wrapper from "../Wrapper/Wrapper";
import { BsFacebook } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Footer = () => {
   return (
      <div className="bg-purple-900 py-10 pb-5">
         <Wrapper>
            <div className="text-center">
               <p className="text-white">Md. Abul Asad Zihad | All Rights reserverd {moment().format("YYYY")}</p>
               <div className="text-white text-center flex items-center justify-center gap-3 my-3">
                  <Link to="https://www.facebook.com/maazihadin" target="_blank">
                     <BsFacebook size={24} />
                  </Link>
                  <Link to="https://github.com/maazihad" target="_blank">
                     <AiFillGithub size={24} />
                  </Link>
               </div>
            </div>
         </Wrapper>
      </div>
   );
};

export default Footer;