import { hot } from 'react-hot-loader';
import React, { Suspense, useEffect, useState, memo, useCallback } from 'react';

import { AppWrapper } from './contexts/App';

import { HashRouter as Router, useLocation, useHistory } from 'react-router-dom';
import Primary from './components/Primary/';
import Secondary from './components/Secondary';

import Setting from './components/Setting/';

import { Transition } from 'react-transition-group';

function App() {
  return (
    <Suspense fallback={<div>Component is Loading...</div>}>
      <AppWrapper>
        <Router>
          <Main />
          <SettingWrapper />
        </Router>
      </AppWrapper>
    </Suspense>
  );
}

function Main() {
  return (
    <main className="flex h-screen relative">
      <Primary />
      <Secondary />
    </main>
  );
}

function SettingWrapper() {
  const history = useHistory();
  const location = useLocation();
  const routeMatched = /setting/.test(location.pathname.toLowerCase());
  const [show, setShow] = useState(routeMatched);
  const timeout = 150;

  useEffect(() => {
    setShow(routeMatched);
  }, [location.pathname]);

  const handleClose = useCallback(() => {
    setShow(false);

    setTimeout(() => {
      history.push('/');
    }, timeout);
  }, []);

  return (
    <Transition in={show} timeout={timeout}>
      {(state) => (show || routeMatched) && <Setting state={state} timeout={timeout} handleClose={handleClose} />}
    </Transition>
  );
}

export default hot(module)(App);
