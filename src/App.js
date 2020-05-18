import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader';

import withProvider from './contexts';

import { HashRouter as Router, Route, useLocation } from 'react-router-dom';
import Primary from './components/Primary/';
import Secondary from './components/Secondary';

import Setting from './components/Setting/';

import { Transition, SwitchTransition } from 'react-transition-group';
import FadeSwitch from './components/FadeSwitch';

function App() {
  return (
    <Suspense fallback={<div>Component is Loading...</div>}>
      <Router>
        <Main />
        <SettingWrapper />
        {/* <FadeSwitch mode="in-out">
          <Route path="/Setting" component={Setting} />
        </FadeSwitch> */}
      </Router>
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
  const location = useLocation();
  const show = location.pathname.toLowerCase().match(/setting/);
  console.log(location, show);
  return show && <Setting />;
}

export default hot(module)(withProvider(App));
