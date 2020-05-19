import { hot } from 'react-hot-loader';
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import { AppWrapper } from './contexts/App';

const Primary = lazy(() => import('./components/Primary/'));
const Secondary = lazy(() => import('./components/Secondary'));
const Setting = lazy(() => import('./components/Setting/'));

function App() {
  return (
    <AppWrapper>
      <Suspense fallback={<div>Component is Loading...</div>}>
        <Router>
          <Main />
          <Setting />
        </Router>
      </Suspense>
    </AppWrapper>
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
export default hot(module)(App);
