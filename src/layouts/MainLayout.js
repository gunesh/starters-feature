import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { AppConsumer } from '../utility/context/AppContext';
import Nav from '../components/Nav/Nav';
// import { Drawer } from '../components';

const MainLayout = () => {
  return (
    <div className="container-fluid">
      <Nav />
      <nav>
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
      </nav>

      {/* <Drawer
        menuItems={[{ value: '11', label: 'ddd', key: 'ddd' }]}
        navigateToRoute={() => {
          console.log('sasad');
        }}
        onSubMenuClick={() => {
          console.log('sasad');
        }}
        showMenuBar={true}
      /> */}

      <AppConsumer>
        {(context) => (
          <>
            <Outlet />
            <button
              onClick={() => {
                context.login();
              }}
            >
              Test
            </button>
          </>
        )}
      </AppConsumer>
    </div>
  );
};

export default MainLayout;
