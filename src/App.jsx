import React from 'react';
import './App.css'

import { BrowserRouter, useRoutes } from 'react-router-dom'

// Components
import ScrollToTop from './components/ScrollToTop'
import NotFound from './sections/NotFound';
import HomeButton from './components/HomeButton';

// Sections
import Landing from './sections/Landing';
import Pages from './sections/Pages';
import Domain from './sections/Domain'

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
              { path: '/domain-history', element: <Domain /> },
              { path: '/pages', element: <Pages /> },
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
