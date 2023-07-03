import { useEffect, useState } from "react";
import Wrapper from "../../components/Shared/Wrapper/Wrapper";


const Skills = () => {
   const [skills, setSkills] = useState([]);

   useEffect(() => {
      fetch('skills.json')
         .then(res => res.json())
         .then(data => setSkills(data));
   }, []);
   return (
      <section className="bg-purple-900 py-20">
         <Wrapper>
            <div className="text-center text-white mb-10">
               <h2 className="text-4xl text-center mb-2 font-caprasimo">My Abilities</h2>
               <p className="font-semibold ">Elevating web development with React.js, MongoDB, and unrivaled expertise.</p>
            </div>
            <div className="grid lg:grid-cols-5 md:grid-cols-4 gap-5 sm:grid-cols-3 grid-cols-2 items-center text-center">

               {
                  skills.map(skill => <div
                     key={skill.id}
                     className="shadow-lg border-2 border-neutral-300 p-2 pb-1 justify-self-center"
                  >
                     <img
                        src={skill.img}
                        alt=""
                        className="w-44 h-24 "
                     />
                     <h5 className="text-white text-center">{skill.skillName}</h5>
                  </div>)
               }

            </div>
         </Wrapper>
      </section>
   );
};

export default Skills;