import { RxCross2 } from "react-icons/rx";
import toyRacerBd from "../../assets/projectimg/toy-racer-bd.png";
import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';

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

                        <a className='flex btn btn-success btn-xs bg-purple-500 text-white capitalize px-2 hover:bg-purple-800 justify-center items-center' target="_blank" rel='noreferrer' href={project.liveLink}>
                           live site<AiOutlineLink className="ml-1" />
                        </a>
                        <a className='flex btn btn-success btn-xs bg-purple-500 text-white capitalize px-2 hover:bg-purple-800 justify-center items-center' target="_blank" rel='noreferrer' href={project.githubRepository.client} >
                           client repo <AiFillGithub className="ml-1" />
                        </a>
                        <a className='flex btn btn-success btn-xs bg-purple-500 text-white capitalize px-2 hover:bg-purple-800 justify-center items-center' target="_blank" rel='noreferrer' href={project.githubRepository.server} >
                           server repo <AiFillGithub className="ml-1" />
                        </a>

                     </div>
                  </div>

                  {/* <ul className='ml-6 mt-2'>
                     {projectDetail && projectDetail.map((detail, index) => <li
                        key={index}
                        className='list-disc'
                     >{detail}</li>)}
                  </ul> */}

                  {/* <ul className='flex justify-start items-center gap-6 mt-4'>
                     {technologies && technologies.map((tech, index) => <li key={index}> <img className='w-12' src={tech} alt="" />  </li>)}
                  </ul> */}

                  <p className='overflow-y-auto max-h-[200px]'><span className="font-bold">Project Description :</span> {project.description}</p>

               </div>

            </div>
         </div>
      </div>

   );
};

export default ProjectDetails;



// import { RxCross2 } from "react-icons/rx";
// import toyRacerBd from "../../assets/projectimg/toy-racer-bd.png";
// import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';

// const ProjectDetails = ({ setModalOpen, project }) => {
//    return (
//       <div className='modal-container h-full w-full fixed top-0 left-0 flex justify-center items-center z-30'>
//          <div className='modal-overlay absolute top-0 left-0 bottom-0 w-full h-full bg-[#3e3e3e73]  flex items-center justify-center px-6'>
//             <div className='modal-content bg-white p-4 md:p-6 w-full md:w-3/5 relative'>
//                <RxCross2 onClick={() => setModalOpen(false)} className='absolute -top-4 -right-4 text-4xl hover:-rotate-[180deg] transition-transform ease-in-out duration-200 bg-white rounded-full p-2 shadow-md cursor-pointer'></RxCross2>
//                <div className='border h-[250px] md:h-[400px] overflow-hidden rounded-[10px]'>
//                   <a>
//                      <img className='w-full hover:-translate-y-[calc(100%-350px)] transition-transform ease-in-out duration-[5s]' src={project.projectImg} alt="" />
//                   </a>
//                </div>
//                <div className='mt-4'>
//                   <div className='flex flex-col md:flex-row justify-between'>
//                      <h2 className='text-lg md:text-2xl'> <span className='font-semibold'>Project Name: {project.projectName}</span> </h2>
//                      <div className='flex mt-2 md:mt-0 gap-8 w-full md:w-1/3 justify-start md:justify-end'>
//                         <a className='w-full md:w-1/2' target="_blank" rel='noreferrer' href={project.liveLink}>
//                            <AiOutlineLink />
//                         </a>
//                         <a className='w-full md:w-1/2' target="_blank" rel='noreferrer' href={project.githubRepository.client} >
//                            <AiFillGithub />
//                         </a>
//                      </div>
//                   </div>
//                   <div className='mt-4 overflow-y-auto'>
//                      <p>{project.description}</p>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default ProjectDetails;




// import { RxCross2 } from "react-icons/rx";
// import toyRacerBd from "../../assets/projectimg/toy-racer-bd.png";
// import { AiOutlineLink, AiFillGithub } from 'react-icons/ai';

// const ProjectDetails = ({ setModalOpen, project }) => {
//    return (
//       <div className='modal-container max-h-4xl w-full fixed top-0 left-0 flex justify-center items-center z-20'>
//          <div className='modal-overlay absolute top-0 left-0 bottom-0 w-full h-full bg-[#3e3e3e73]  flex items-center justify-center px-6'>
//             <div className='modal-content bg-white p-4 md:p-6 w-full md:w-3/5 relative'>
//                <RxCross2 onClick={() => setModalOpen(false)} className='absolute -top-4 -right-4 text-4xl hover:-rotate-[180deg] transition-transform ease-in-out duration-200 bg-white rounded-full p-2 shadow-md cursor-pointer'></RxCross2>
//                <div className='border h-[250px] md:h-[400px] overflow-hidden rounded-[10px]'>
//                   <a>
//                      <img className='w-full hover:-translate-y-[calc(100%-350px)] transition-transform ease-in-out duration-[5s]' src={project.projectImg} alt="" />
//                   </a>
//                </div>
//                <div className='mt-4'>
//                   <div className='flex flex-col md:flex-row justify-between'>
//                      <h2 className='text-lg md:text-2xl'> <span className='font-semibold'>Project Name: {project.projectName}</span> </h2>
//                      <div className='flex mt-2 md:mt-0 gap-8 w-full md:w-1/3 justify-start md:justify-end'>
//                         <a className='w-full md:w-1/2' target="_blank" rel='noreferrer' href={project.liveLink}>
//                            <AiOutlineLink />
//                         </a>
//                         <a className='w-full md:w-1/2' target="_blank" rel='noreferrer' href={project.githubRepository.client} >
//                            <AiFillGithub />
//                         </a>
//                      </div>
//                   </div>
//                   <div className='mt-4 overflow-y-auto max-h-[100px]'>
//                      <p>{project.description}</p>
//                   </div>
//                </div>
//             </div>
//          </div>
//       </div>
//    );
// };

// export default ProjectDetails;