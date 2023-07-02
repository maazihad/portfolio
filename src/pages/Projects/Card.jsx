import ProjectDetails from "./ProjectDetails";


const Card = ({ project }) => {
   return (
      <div className="card  bg-base-100 shadow-xl">
         <div className='h-96 overflow-hidden rounded-md'>
            <img className='w-full hover:-translate-y-[calc(100%-384px)] transition-transform ease-in-out duration-[7s]'
               src={project?.projectImg} alt="" />
         </div>
         <div className="card-body">
            <h2 className="card-title">Project Name : {project?.projectName}</h2>
            <p>{project?.projectDetails}</p>
            <div className="card-actions justify-center">
               <button
                  onClick={() => window.my_modal_3.showModal()}
                  className="btn btn-primary btn-sm bg-purple-900 capitalize">details</button>
            </div>

            <dialog id="my_modal_3" className="modal">
               <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-20">✕</button>
                  <ProjectDetails />
               </form>
            </dialog>

         </div>
      </div>
   );
};

export default Card;