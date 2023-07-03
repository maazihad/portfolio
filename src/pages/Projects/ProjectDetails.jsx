import { RxCross2 } from "react-icons/rx";
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';
import { Link } from "react-router-dom";

const ProjectDetails = ({ setModalOpen, project }) => {
   return (

      <div className='modal-container h-full w-full fixed top-0 left-0 flex justify-center items-center z-30'>

         <div className='modal-overlay absolute top-0 left-0 bottom-0 w-full h-full bg-[#3e3e3e73]  flex items-center justify-center px-6'>
            <div className='modal-content bg-white p-4 md:p-6  w-full md:w-3/5 relative'>
               <RxCross2 onClick={() => setModalOpen(false)} className='absolute -top-4 -right-4 text-4xl hover:-rotate-[180deg] transition-transform ease-in-out duration-200 bg-white rounded-full p-2  shadow-md cursor-pointer'></RxCross2>
               <div className='border h-[250px] md:h-72 overflow-hidden rounded-[10px]'>
                  <a >
                     <img className='w-full hover:-translate-y-[calc(100%-350px)] transition-transform ease-in-out duration-[5s]'
                        src={project.projectImg} alt="" />
                  </a>
               </div>
               <div className='mt-4'>
                  <div className='flex flex-col md:flex-row justify-between'>
                     <h2 className='text-lg md:text-2xl'> <span className='font-semibold'>Project Name : {project.projectName}</span>  </h2>
                     <div className='flex justify-end gap-5 mr-2'>
                        <Link className='flex btn btn-success btn-xs bg-purple-500 text-white capitalize px-2 hover:bg-purple-800 justify-center items-center' target="_blank" rel='noreferrer' to={project.liveLink}>
                           live site<AiOutlineLink className="ml-1" />
                        </Link>
                        <Link className='flex btn btn-success btn-xs bg-purple-500 text-white capitalize px-2 hover:bg-purple-800 justify-center items-center' target="_blank" rel='noreferrer' to={project.githubRepository.client} >
                           client repo <AiFillGithub className="ml-1" />
                        </Link>
                        <Link className='flex btn btn-success btn-xs bg-purple-500 text-white capitalize px-2 hover:bg-purple-800 justify-center items-center' target="_blank" rel='noreferrer' to={project.githubRepository.server} >
                           server repo <AiFillGithub className="ml-1" />
                        </Link>
                     </div>
                  </div>
                  <p className='overflow-y-auto max-h-[200px]'><span className="font-bold">Project Description :</span> {project.description}</p>
               </div>
            </div>
         </div>
      </div>

   );
};

export default ProjectDetails;