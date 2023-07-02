import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Projects from "../pages/Projects/Projects";

export const router = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      children: [
         {
            path: '/',
            element: <Home />
         },
         {
            path: 'about',
            element: <About />
         },
         {
            path: 'contact',
            element: <Contact />
         },
         {
            path: 'projects',
            element: <Projects />
         }
      ]
   }
]);