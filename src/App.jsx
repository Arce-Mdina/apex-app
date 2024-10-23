import React from 'react';
import './App.css'

import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom'

// Components
import ScrollToTop from './components/ScrollToTop'
import NotFound from './sections/NotFound';
import HomeButton from './components/HomeButton';

import { Analytics } from "@vercel/analytics/react"

// Sections
import Landing from './sections/Landing';
import Pages from './sections/Pages';
import Islet from './sections/Islet';
import Sources from './sections/Sources';

const RouterConfig = () => {
  const routes = [
    {
      path: '/',
      element: <Landing />,
    },
    {
      path: '*',
      element: (
        <>
          <HomeButton />
          <div className="content">
            {useRoutes([
              { path: '/projects', element: <Pages /> },
              { path: '/filfla', element: <Islet />},
              { path: '/sources', element: <Sources />},
              { path: '*', element: <NotFound /> },
            ])}
          </div>
        </>
      ),
    },
  ];

  return useRoutes(routes);
};

const App = () => {
  return (
    <>
      <BrowserRouter basename="/">
        <ScrollToTop />
        <Analytics />
        <RouterConfig />
      </BrowserRouter>
    </>
  );
};

export default App;
