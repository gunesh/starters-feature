import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Spinner from '../components/spinner/spinner';

const LazyLogin = lazy(() => import('../screens/Login/Login'));
const LazyDashboard = lazy(() => import('../screens/Dashboard/Dashboard'));

import AuthLayout from '../layouts/AuthLayout';
import MainLayout from '../layouts/MainLayout';
class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route
              index
              element={
                <Suspense fallback={<Spinner />}>
                  <LazyLogin />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<Spinner />}>
                  <LazyLogin />
                </Suspense>
              }
            />
          </Route>

          <Route path="/dashboard" element={<MainLayout />}>
            <Route index element={<LazyDashboard />} />
            <Route path="dashboard" element={<LazyDashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;
