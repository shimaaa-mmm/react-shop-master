import {Home} from "../page/Web/Home/Home.jsx";
import {Menu} from "@page/Web/Menu/Menu.jsx";
import { Photo } from "@page/Web/Photo/Photo.jsx";
import { About } from "../page/Web/About/About.jsx";
import {Map} from "../page/Web/Map/Map.jsx"
const webRoutes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/menu',
        element: <Menu/>
    },
    {
        path: '/photo',
        element: <Photo/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/map',
        element: <Map/>
    },
   
  
   
]

export default webRoutes;