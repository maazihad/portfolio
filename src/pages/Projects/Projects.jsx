import { useEffect, useState } from "react";
import toyRacerBd from "../../assets/projectimg/toy-racer-bd.png";
import ProjectDetails from "./ProjectDetails";
import Card from "./Card";

const Projects = () => {



   const [projects, setProjects] = useState([]);
   useEffect(() => {
      fetch("data.json")
         .then(res => res.json())
         .then(data => setProjects(data));
   }, []);


   return (
      <div className="p-24 min-h-screen w-full bg-bg-project bg-opacity-50 bg-cover bg-center bg-no-repeat">
         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {
               projects.map(project => <Card
                  key={project.id}
                  project={project}
               ></Card>)
            }



            {/* <div className="card  bg-base-100 shadow-xl">
               <div className='h-96 overflow-hidden rounded-md'>
                  <img className='w-full hover:-translate-y-[calc(100%-384px)] transition-transform ease-in-out duration-[7s]'
                     src={toyRacerBd} alt="" />
               </div>
               <div className="card-body">
                  <h2 className="card-title">Project Name : Car Toys Marketplace</h2>
                  <p>If you need any type of car toy for your child. This is for you</p>
                  <div className="card-actions justify-center">
                     <button
                        onClick={() => window.my_projects.showModal()}
                        className="btn btn-primary btn-sm bg-purple-900 capitalize">details</button>
                  </div>

                  <dialog id="my_projects" className="modal">
                     <form method="dialog" className="modal-box w-11/12 max-w-5xl">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-20">✕</button>
                        <ProjectDetails />
                     </form>
                  </dialog>

               </div>
            </div> */}
         </div>
      </div >
   );
};

export default Projects;