import { createBrowserRouter } from "react-router-dom";
import {Home,Layout,Error,IconPage,} from '../components'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement : <Error/>,
    children : [
        {
        path: '',
        element : <Home/>,
    },
    {
      path : '/icons',
      element : <IconPage/>
  },
    {
        path : '/icons/:iconId',
        element : <IconPage/>
    },
]
  },

]);

export default routes;
