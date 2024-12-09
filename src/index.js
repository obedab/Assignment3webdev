import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from 'react-router-dom';
import NotFound from './components/NotFound';
import About from './pages/About';
import BlogPost from './pages/BlogPost';
import ProductDetails from './pages/ProductDetails';



const rooter = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<NotFound/>
  },
  {
    path:'/about',
    element:<About/>,
    errorElement:<NotFound/>
  },
  {
    path:'/BlogPost',
    element:<BlogPost/>,
    errorElement:<NotFound/>
  },{
    path: '/ProductDetails',
    element: <ProductDetails />,  
    errorElement: <NotFound />,
  },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rooter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
