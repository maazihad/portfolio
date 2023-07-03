import Wrapper from "../../components/Shared/Wrapper/Wrapper";
import { useForm } from "react-hook-form";
import { TiLocationArrow } from 'react-icons/ti';

const Message = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const onSubmit = (data) => {
      console.log(data);
   };

   return (

      <div className="bg-amber-300 pt-20 min-h-[calc(100vh-5px)]">
         <div className="absolute top-0 rounded-xl w-full text-white  h-full  right-0 bg-gradient-to-b from-[#000000] to-[rgba(30, 30, 30, .5)] opacity-30"></div>
         <Wrapper>
            <div className=" ">
               <div className="text-center mt-28">
                  <h2 className="lg:text-6xl md:text-5xl text-4xl text-purple-700 font-bold">Send me a message</h2>
                  <p className="text-md w-3/6 mx-auto mt-5 text-purple-800 mb-10">If you have any inquiries, proposals, or simply want to drop a friendly greeting, go ahead and share your thoughts! I'm here and eager to hear from you.</p>
               </div>
               <form className="p-4 max-w-4xl mx-auto" onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid gap-10 lg:grid-cols-2">

                     <div className="mb-8">
                        <input
                           {...register("name", { required: true })}
                           type="text"
                           name="name"
                           id="name"
                           placeholder="Enter your name"
                           className={`block placeholder w-full bg-transparent outline-none border-b-2 py-2 px-2  placeholder-purple-700 focus:text-purple-700
                            ${errors.name
                                 ? "text-red-300 border-red-400"
                                 : "text-purple-700 border-purple-400"
                              }`}

                        />
                        {errors.name && <span className="text-red-700 text-md">Name field is required!</span>}
                     </div>

                     <div className="mb-8">
                        <input
                           {...register("email", { required: true })}
                           type="text"
                           name="email"
                           id="email"
                           placeholder="example@example.com"
                           className={`block w-full bg-transparent outline-none border-b-2 py-2 px-2  placeholder-purple-700 focus:text-black 
                        ${errors.email
                                 ? "text-red-300 border-red-400"
                                 : "text-purple-700 border-purple-400"
                              }`}
                        />
                        {errors.email && <span className="text-red-700 text-md">Email field is required!</span>}
                     </div>
                  </div>

                  <div className="mb-8">
                     <textarea
                        {...register("message", { required: true })}
                        name="message"
                        placeholder="Your Message"
                        className={`block w-full bg-transparent outline-none border-b-2 py-2 px-2  placeholder-purple-700 focus:text-black 
                     ${errors.message
                              ? "text-red-300 border-red-400"
                              : "text-purple-700 border-purple-400"
                           }`}
                     ></textarea>
                     {errors.message && <span className="text-red-700 text-md">Message field is required!</span>}
                  </div>
                  <div className="flex flex-col justify-center items-center">
                     <button
                        className="flex mr-2 justify-center items-center text-purple-700
               shadow py-2 text-md hover:text-purple-900 hover:border-purple-900 transition-all  rounded-none border border-purple-700 font-semibold px-20">
                        Shoot <TiLocationArrow size={24} className="ml-2" />
                     </button>
                  </div>
               </form>
            </div>
         </Wrapper>
      </div>

   );
};

export default Message;