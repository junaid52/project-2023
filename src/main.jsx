import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx';
import Index from './pages/Index.jsx';
import About from './pages/About.jsx';
import Services from './pages/Services.jsx';
import Blog from './pages/Blog.jsx';
import Contact from './pages/Contact.jsx';
import Post from './pages/Post.jsx';
import './index.css'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'blog',
        element: <Blog />
      },
      {
        path: 'blog/posts/:id',
        element: <Post />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={router} />
  
)
