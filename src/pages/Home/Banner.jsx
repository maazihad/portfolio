import Wrapper from "../../components/Shared/Wrapper/Wrapper";
import img1 from "../../assets/img/avatar-logo.jpg";
import { Typewriter } from "react-simple-typewriter";
import resume from "../../../public/resume_of_Md_Abul_Asad_Zihad.pdf";

const Banner = () => {



   return (

      <div className="bg-bg-home bg-no-repeat bg-cover bg-center">
         <Wrapper>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 h-screen justify-center items-center">
               <div className=" self-center lg:col-span-2 lg:ml-8 md:mr-5 lg:mt-0 p-10 pt-5 lg:p-0 order-2 lg:order-none">
                  <div className="mb-10 ">
                     <div>
                        <p className="text-amber-300 ml-1 text-2xl font-bold capitalize">I&apos;m Md. Abul Asad Zihad</p>
                        <h1 className="lg:text-7xl md:text-4xl text-4xl font-bold text-amber-200 m:mt-20">
                           <Typewriter words={["Jr. Frontend", "Jr. Web", "React.js", "MERN Stack",]} loop={0 | false} /> <br />
                           <span>Developer.</span>
                        </h1>
                        <p className="text-white mb-10 lg:mb-0 md:text-md text-md font-semibold lg:text-lg mt-5 lg:leading-7">
                           Transforming ideas into stunning digital masterpieces <br /> with code and creativity.
                        </p>
                     </div>

                  </div>
                  <div className="lg:w-3/5 lg:flex gap-5">
                     <p className="border-l-4 pl-2 text-neutral-300 mb-10 lg:mb-0 md:text-md text-md font-semibold lg:text-md mt-5 lg:leading-7">
                        Coding excellence, web solutions that make an impact, crafted by a junior developer with passion.
                     </p>
                     <p className="border-l-4 pl-2 text-neutral-300 mb-10 lg:mb-0 md:text-md text-md font-semibold lg:text-md mt-5  lg:leading-7">
                        Coding excellence, web solutions that make an impact, crafted by a junior developer with passion.
                     </p>
                  </div>
               </div>

               <div className="justify-self-center relative mt-20 order-1 lg:order-none">
                  <div className="absolute md:-top-20 md:-left-20 -top-7 -left-7 bg-dot-svg md:w-52 md:h-52 h-32 w-32">
                  </div>
                  <div className="flex flex-col items-center">
                     <div className="avatar">
                        <div className="w-32 h-32 lg:w-80 lg:h-80 md:w-52 md:h-52 z-20">
                           <img className="z-10 border border-amber-200" src={img1} alt="" />
                        </div>
                     </div>
                     <div className="md:hidden mt-2">
                        <a href={resume}
                           className='px-4 py-2 rounded-md text-white blinking-text  hover:text-neutral-300 transition ease-in-out delay-150 capitalize font-semibold'
                        >
                           Download my resume
                        </a>
                     </div>
                  </div>

                  <div className="lg:w-80 lg:h-80 border-2  border-neutral-300 absolute lg:top-8 lg:left-8 top-2 left-2"></div>

               </div>
            </div>

         </Wrapper>
      </div>

   );
};

export default Banner;