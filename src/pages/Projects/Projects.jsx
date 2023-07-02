import { useEffect, useState } from "react";
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
         </div>
      </div >
   );
};

export default Projects;