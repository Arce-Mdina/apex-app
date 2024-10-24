import React from 'react';
import './App.css'

import { BrowserRouter, useRoutes } from 'react-router-dom'

// Analytics
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/react';

// Components
import ScrollToTop from './components/ScrollToTop'
import NotFound from './sections/NotFound';
import BackButton from './components/BackButton';

// Sections
import Landing from './sections/Landing';
import Pages from './sections/Pages';
import Islet from './sections/Islet';
import Sources from './sections/Sources';
import Research from './sections/Research';
import Process from './sections/Process';

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
          <BackButton />
          <div className="content">
            {useRoutes([
              { path: '/projects', element: <Pages /> },
              { path: '/filfla', element: <Islet />},
              { path: '/sources', element: <Sources />},
              { path: '/research', element: <Research />},
              { path: '/process', element: <Process />},
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
        <SpeedInsights/>
        <RouterConfig />
      </BrowserRouter>
    </>
  );
};

export default App;
