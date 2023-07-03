import { useState } from "react";
import ProjectDetails from "./ProjectDetails";
import { Link } from "react-router-dom";

const Card = ({ project }) => {
   const [modalOpen, setModalOpen] = useState(false);

   return (
      <div className="card  bg-base-100 shadow-xl">
         <div className='max-h-96 overflow-hidden rounded-md'>
            <img className='w-full hover:-translate-y-[calc(100%-384px)] transition-transform ease-in-out duration-[7s]'
               src={project.projectImg} alt="" />
         </div>
         <div className="mt-2 ml-5">
            <h2 className="card-title">Project Name : {project.projectName}</h2>
            <p>Project purpose : {project.projectType}</p>
            <div className="flex items-center gap-5 justify-center mt-2">
               <img src={project.technologiesUsed.reactJs} className="w-10 h-10 object-cover rounded-full bg-purple-300 hover:bg-purple-400 p-1 border-2 border-purple-400" alt="" />
               <img src={project.technologiesUsed.tailwindCSS} className="w-10 h-10 object-cover rounded-full bg-purple-300 hover:bg-purple-400 p-1 border-2 border-purple-400" alt="" />
               <img src={project.technologiesUsed.expressJs} className="w-10 h-10 object-cover rounded-full bg-purple-300 hover:bg-purple-400 p-1 border-2 border-purple-400" alt="" />
               <img src={project.technologiesUsed.mongoDb} className="w-10 h-10 object-cover rounded-full bg-purple-300 hover:bg-purple-400 p-1 border-2 border-purple-400" alt="" />
               <img src={project.technologiesUsed.nodeJs} className="w-10 h-10 object-cover rounded-full bg-purple-300 hover:bg-purple-400 p-1 border-2 border-purple-400" alt="" />
               <img src={project.technologiesUsed.npmPackages} className="w-10 h-10 object-cover rounded-full bg-purple-300 hover:bg-purple-400 p-1 border-2 border-purple-400" alt="" />
            </div>
            <div className="card-actions justify-center grow">
               <Link onClick={() => setModalOpen(true)}>
                  <button className="btn btn-primary mt-5 mb-5 btn-sm bg-purple-900 capitalize">View Detail</button>
               </Link>

               {
                  modalOpen && <div className='flex items-center justify-center px-2 '>
                     <ProjectDetails
                        project={project}
                        setModalOpen={setModalOpen}
                     ></ProjectDetails>
                  </div>
               }
            </div>

         </div>
      </div>
   );
};

export default Card;