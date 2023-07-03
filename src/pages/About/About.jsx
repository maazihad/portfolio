import Wrapper from '../../components/Shared/Wrapper/Wrapper';
import profileBg from "../../assets/img/profile-bg.jpg";
import { Helmet } from 'react-helmet-async';

const About = () => {
   return (
      <>
         <Helmet>
            <title>Md. Abul Asad Zihad | About me</title>
         </Helmet>
         <div className='h-full'>
            <div className=" lg:w-full  relative">
               <img className="object-cover object-center w-full h-96 rounded-md shadow bg-gradient-to-b from-neutral-800" src={profileBg} alt="Profile" />
               <div className="absolute top-0 rounded-xl w-full text-white  h-full  right-0 bg-gradient-to-b from-[#000000] to-[rgba(30, 30, 45, .5)] opacity-70"></div>
            </div>
            <Wrapper>
               <section className="bg-white dark:bg-gray-800">
                  <div className="container  pb-20 pt-5 mx-auto">
                     <div className="w-full">
                        <h2 className="text-2xl font-bold text-center text-purple-700 dark:text-white md:text-3xl mt-5">About Me</h2>
                        <p className="mt-4 text-neutral-600 text-lg">
                           Hi there! I'm Md. Abul Asad Zihad, a passionate frontend developer with expertise in React.js and modern web development. I have a strong command of JavaScript (ES6+) and enjoy creating interactive and user-friendly interfaces.
                        </p>
                        <p className="mt-4 text-neutral-600 text-lg">
                           With several years of experience in the field, I have worked on a variety of projects, ranging from skill-based program school websites to e-commerce platforms. My main focus is on building responsive, performant, and visually appealing web applications using the latest technologies and best practices.
                        </p>
                        <p className="mt-4 text-neutral-600 text-lg">
                           In my previous role as a Computer Operator at Chittagong Ideal High School, I gained valuable experience in composing questions, writing office forwarding, and notice writing. I was also responsible for creating profiles on the school's website. These experiences have honed my attention to detail and ability to work efficiently in a team environment.
                        </p>
                        <p className="mt-4 text-neutral-600 text-lg">
                           As a frontend developer, I am proficient in React.js and component-based architecture. I have expertise in HTML5, CSS3, Tailwind CSS, and Bootstrap 5, which allow me to create visually appealing and responsive web interfaces. I am skilled in frontend-backend integration using technologies such as Express.js, MongoDB, Vercel, Netlify, Firebase, and JWT for user authentication and authorization.
                        </p>
                        <p className="mt-4 text-neutral-600 text-lg">
                           Additionally, I have experience with various tools and libraries including Stripe, Git, GitHub, Dotenv, Figma, and NPM packages. These tools enable me to streamline development processes, collaborate effectively, and create seamless user experiences.
                        </p>
                        <p className="mt-4 text-neutral-600 text-lg">
                           Alongside my technical skills, I possess excellent interpersonal skills and have proficiency in Adobe Photoshop, Adobe Illustrator, and MS Office. These skills enhance my ability to communicate and collaborate with cross-functional teams, ensuring successful project delivery.
                        </p>

                        <h4 className="font-bold text-xl text-purple-900 mt-4">A Track Record of Successful Projects:</h4>

                        <h5 className='font-bold text-lg mt-4 text-purple-800'>Photography Camp School:</h5>
                        <p>
                           I developed a responsive summer photography camp school website using React.js and Tailwind CSS. The project included implementing user authentication and authorization using JSON Web Tokens (JWT). With a focus on frontend-backend integration, the website utilized Express.js and MongoDB for the backend. The inclusion of admin, instructor, and user dashboards, along with a secure payment method, showcased Md. Zihad's ability to create feature-rich applications.
                        </p>

                        <h5 className='font-bold text-lg mt-4 text-purple-800'>Toy-Racer BD:</h5>
                        <p>
                           I'm created an exciting web application called `Toy Racer BD,` which served as a child sports toy marketplace. Leveraging React.js and Tailwind CSS, he developed an intuitive user interface that allowed users to add toys to their collection. The backend was built using Express.js and MongoDB, ensuring seamless data management and user interactions.
                        </p>

                        <h5 className='font-bold text-lg mt-4 text-purple-800'>Khadok Chottola:</h5>
                        <p>
                           In this project, I showcased my skills in designing and developing a responsive website that featured famous chefs and their prepared dishes. Utilizing React.js and Tailwind CSS, he created an aesthetically pleasing and user-friendly platform. The backend, powered by Express.js and MongoDB, facilitated seamless data retrieval and RESTful API integration.
                        </p>

                     </div>
                  </div>
               </section>
            </Wrapper>
         </div>
      </>
   );
};

export default About;
