import React from 'react';
import './App.css'

import { BrowserRouter, useRoutes } from 'react-router-dom'

// Components
import ScrollToTop from './components/ScrollToTop'
import NotFound from './sections/NotFound';
import BackButton from './components/BackButton';

// Sections
import Landing from './sections/Landing';
import Projects from './sections/Projects';
import Islet from './sections/Islet';
import Sources from './sections/Sources';
import Research from './sections/Research';
import Process from './sections/Process';
import Pages from './sections/Pages';
import Pro from './sections/Pro';


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
              { path: '/projects', element: <Projects /> },
              { path: '/basic', element: <Pages /> },
              { path: '/pro', element: <Pro /> },
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
        <RouterConfig />
      </BrowserRouter>
    </>
  );
};

export default App;
