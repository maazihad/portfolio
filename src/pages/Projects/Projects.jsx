import { useEffect, useState } from "react";
import Card from "./Card";
import { Helmet } from "react-helmet-async";
import Wrapper from "../../components/Shared/Wrapper/Wrapper";

const Projects = () => {

   const [projects, setProjects] = useState([]);
   useEffect(() => {
      fetch("data.json")
         .then(res => res.json())
         .then(data => setProjects(data));
   }, []);


   return (
      <>
         <Helmet>
            <title>Md. Abul Asad Zihad | Projects</title>
         </Helmet>
         <div className="pt-28 min-h-screen w-full bg-bg-project bg-opacity-50 bg-cover bg-center bg-no-repeat">
            <Wrapper>
               <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                  {
                     projects.map(project => <Card
                        key={project.id}
                        project={project}
                     ></Card>)
                  }
               </div>
            </Wrapper>
         </div>
      </>
   );
};

export default Projects;