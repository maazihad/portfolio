import { Link } from "react-scroll";
import Wrapper from "../../components/Shared/Wrapper/Wrapper";


const Strength = () => {

   return (

      <Wrapper>
         <div className="lg:flex gap-10 py-28 px-10 h-screen">
            <div className="  lg:mt-32 relative">
               <div className="relative">
                  <h2 className="text-blue-800 font-bold lg:text-6xl md:text-5xl text-4xl mb-5">Strength</h2>
                  <p className="text-justify text-md text-blue-800 lg:w-5/6">I&apos;m not your typical designer confined to Illustrator&apos;s artboard. Instead, you&apos;ll find me immersed in stylesheets, meticulously fine-tuning fonts and passionately exploring layouts. My ultimate goal? Crafting user experiences that flow effortlessly, while embracing the latest trends and staying fashion-forward.</p>
               </div>
               <div className="absolute -bottom-5  bg-dot-svg w-52 h-52"></div>
            </div>
            <div className="lg:mt-64 relative">
               <div className="absolute -top-28 -left-20 bg-dot-svg w-52 h-52"></div>
               <div className="relative z-10">
                  <h2 className="text-blue-800 font-bold lg:text-6xl md:text-5xl text-4xl mb-5 mt-5 lg:mt-0">Engineering</h2>
                  <p className="text-justify text-md text-blue-800 lg:w-5/6">I excel at developing JavaScript applications with the right set of tools. Whether working independently or collaboratively, I deliver efficient and robust solutions that prioritize speed, reliability, and scalability. Ensuring optimal performance and the ability to handle increased demands are always my foremost concerns.</p>
               </div>
            </div>
         </div>
      </Wrapper>

   );
};

export default Strength;