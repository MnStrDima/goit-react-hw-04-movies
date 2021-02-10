import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { routes } from './routes';
import AppBar from './components/AppBar/AppBar';

const HomePage = lazy(() =>
  import('./views/HomePage' /* webpackChunkName: "home-page"*/),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage' /* webpackChunkName: "movies-page"*/),
);
const MovieDetailsPage = lazy(() =>
  import(
    './views/MovieDetailsPage' /* webpackChunkName: "movies-details-page"*/
  ),
);

const App = () => (
  <>
    <AppBar />
    <Suspense
      fallback={
        <Loader
          className="loader"
          type="ThreeDots"
          color="#3f51b5"
          height={100}
          width={100}
        />
      }
    >
      <Switch>
        <Route path={routes.homePage} exact component={HomePage} />
        <Route path={routes.moviesPage} exact component={MoviesPage} />
        <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
        <Redirect to={routes.homePage} />
      </Switch>
    </Suspense>
    <ToastContainer />
  </>
);

export default App;
