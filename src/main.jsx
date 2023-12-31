import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from './App.jsx'
import { Header } from './components/Header/Header.jsx'
import { Home } from './components/Home/Home.jsx';
import { About } from './components/About/About.jsx'
import { ErrorPage } from './components/Error/Error.jsx';
import { Product } from './components/Product/Product.jsx';
import { Testimonial } from './components/Testimonials/Testimonials.jsx';
import { Footer } from './components/Footer/Footer.jsx';
import { Loader } from './components/Loader/Loader.jsx';

import { FaArrowAltCircleUp } from "react-icons/fa";

import './index.scss'

const topOfThePagehander = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <FaArrowAltCircleUp
              className="Top-of-the-page"
              onClick={topOfThePagehander}
            />
            <Loader />
            <Header />
            <Home />
            <About />
            <Product />
            <Testimonial />
            <Footer />
          </>
        )
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
