import { createBrowserRouter } from 'react-router-dom';

import About from '../pages/About';
import Careers from '../pages/Careers';
import Events from '../pages/Events';
import Products from '../pages/Products';
import Support from '../pages/Support';
import Public from '../layout/Public';





export const router = createBrowserRouter([

    {
        path:'/',
        element: <Public/>,
        children: [

            {
                path: '/',
                element: <About/>,
            }, 
        
            {
                path: '/careers',
                element: <Careers/>,
            },
        
            {
                path: '/events',
                element: <Events/>,
            },
        
            {
                path: '/products',
                element: <Products/>
            },
        
            {
                path: '/support',
                element: <Support/>,
            }

        ]
    }

   


]);