import debounce from 'lodash.debounce';
import { useEffect, useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
   const [scroll, setScroll] = useState(false);
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const handleScroll = debounce(() => {
         setScroll(window.scrollY > 50);
      }, 5);

      window.addEventListener('scroll', handleScroll);

      return () => {
         window.removeEventListener('scroll', handleScroll);
      };
   }, []);


   const navItems = [
      { id: 101, path: '/', title: "Home" },
      { id: 102, path: '/about', title: "About" },
      { id: 103, path: '/projects', title: "Projects" },
      { id: 104, path: '/contact', title: "Contact" },
   ];

   return (
      <nav className={`z-30 fixed w-full top-0 p-2 ${scroll ? 'fixed top-0 bg-bg-home bg-cover bg-center shadow-sm backdrop-blur' : ' bg-transparent shadow-none '}`}>
         <div className={`flex relative justify-between items-center max-w-7xl mx-auto transition-all duration-500 ease-in-out ${scroll ? 'h-12' : 'h-14'}`}>
            <div>
               <Link to="/"
                  className='font-chokokuta text-2xl text-red-100 font-bold ml-12 md:ml-20'
               >
                  maaz
               </Link>
            </div>
            <ul className='hidden md:block'>
               {
                  navItems.map(item => <NavLink
                     key={item.id}
                     to={item.path}
                     className={({ isActive }) => isActive ?
                        "bg-purple-800 text-white font-semibold py-2 px-5 mx-1" :
                        " hover:bg-neutral-300 hover:text-purple-800 text-white mx-1 py-2 px-5"}
                  >
                     {item.title}
                  </NavLink>)
               }
               <a href={`https://drive.google.com/file/d/1Rj8UMqptVWmfxCHKQaz2MZpBLlokdwdo/view?usp=sharing`}
                  className='border-2 px-4 py-2 rounded-md text-neutral-200 blinking-text hover:bg-neutral-300 bg-purple-700 hover:text-purple-800 transition ease-in-out delay-150 capitalize font-semibold'
               >
                  Download my resume
               </a>

            </ul>

            <div className="absolute top-0 w-full right-0 md:hidden">
               <div className="absolute top-0 right-0 z-10">
                  <div className="flex bg-purple-700 hover:bg-purple-900 rounded-full p-2 items-center justify-center  swap swap-rotate transition-all duration-500 shadow-sm shadow-neutral-200">
                     <button
                        onClick={() => setIsOpen(!isOpen)}
                     >
                        {!isOpen ? (
                           <RiMenu3Fill size={30} className='text-neutral-100' />
                        ) : (
                           <RxCross2 size={30} className='text-red-100' />
                        )}
                     </button>
                  </div>
               </div>
               <div className='w-full absolute  top-4 bg-neutral-200 '>
                  {
                     isOpen &&

                     <ul
                        className=' transition duration-300 ease-in   '
                     >
                        {
                           navItems.map(item => <NavLink
                              key={item.id}
                              to={item.path}
                              className={({ isActive }) => isActive ?
                                 "bg-purple-800 text-white font-semibold block py-2 px-5" :
                                 "text-purple-600 hover:bg-neutral-300 hover:text-purple-800 block   py-2 px-5"}
                           >
                              {item.title}
                           </NavLink>)
                        }
                     </ul>
                  }
               </div>
            </div>

         </div>

      </nav>
   );
};

export default Navbar;




