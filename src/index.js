import React, { StrictMode, Suspense, lazy } from 'react';
import ReduxToastr from 'react-redux-toastr';
import 'font-awesome/css/font-awesome.min.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import jwtDecode from 'jwt-decode';
import configureStore from './redux/storeConfig';
import Spinner from './components/spinner/spinner';
import { AppProvider } from './utility/context/AppContext';
import './style.scss';

const LazyApp = lazy(() => import('./app/app'));

const root = createRoot(document.getElementById('app'));
const store = configureStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

root.render(
  <Provider store={store}>
    <StrictMode>
      <Suspense fallback={<Spinner />}>
        <AppProvider>
          <LazyApp />
          {/* <ReduxToastr
          timeOut={4000}
          newestOnTop={false}
          preventDuplicates
          position="top-left"
          transitionIn="fadeIn"
          transitionOut="fadeOut"
          progressBar
          closeOnToastrClick
        /> */}
        </AppProvider>
      </Suspense>
    </StrictMode>
  </Provider>
);
