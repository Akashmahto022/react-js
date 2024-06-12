import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "../Layout";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contect/Contect";
import User from "./components/User/User";
import Github from "./components/Github/Github";
import { githubLoader } from "./components/Github/Github";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },
        {
          path: "/About",
          element: <About/>
        },
        {
          path: "/Contect",
          element: <Contact/>
        },
      ]
    }
  ])

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route path="/" element={<Layout />}>
  //       <Route path="/" element={<Home />} />
  //       <Route path="/About" element={<About />} />
  //       <Route path="/Contect" element={<Contact />} />
  //       <Route path="/user/:userid" element={<User />} />
  //       <Route loader={githubLoader} path="/github" element={<Github />} />
  //     </Route>
  //   )
  // );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
