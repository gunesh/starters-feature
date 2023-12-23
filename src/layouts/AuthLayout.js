import React from 'react';
import classnames from 'classnames';
import { Outlet, Link } from 'react-router-dom';
import templateConfig from '../utility/templateConfig';

const AuthLayout = () => {
  return (
    <>
      <div
        className={classnames('login-layout wrapper ', {
          'layout-dark': templateConfig.layoutDark,
        })}
      >
        <Link to="/dashboard">dashboard</Link>
        <main className="main text-muted">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default AuthLayout;
