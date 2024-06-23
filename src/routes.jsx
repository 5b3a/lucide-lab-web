import { createBrowserRouter } from "react-router-dom";

import Home from './Home'
import Layout from "./Layout";
import IconComp from "./IconComp";
import ErrorPage from "./Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement : <ErrorPage/>,
    children : [
        {
        path: '',
        element : <Home/>,
    },
    {
      path : '/icons',
      element : <IconComp/>
  },
    {
        path : '/icons/:iconId',
        element : <IconComp/>
    },
]
  },

]);

export default routes;
