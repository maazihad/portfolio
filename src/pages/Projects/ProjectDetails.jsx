
import toyRacerBd from "../../assets/projectimg/toy-racer-bd.png";

const ProjectDetails = () => {
   return (
      <div className="card  bg-base-100 ">
         <div className='h-96 overflow-hidden rounded-none'>
            <img className='w-full hover:-translate-y-[calc(100%-384px)] transition-transform ease-in-out duration-[7s]'
               src={toyRacerBd} alt="" />
         </div>
         <div className="card-body">
            <h2 className="card-title">Project Name : Car Toys Marketplace</h2>
            <p>If you need any type of car toy for your child. This is for you</p>

         </div>
      </div>
   );
};

export default ProjectDetails;