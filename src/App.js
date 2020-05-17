import React, { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { hot } from 'react-hot-loader';

import withProvider from './contexts';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Primary from './components/Primary/';
import Secondary from './components/Secondary';

function App() {
  return (
    <Suspense fallback={<div>Component is Loading...</div>}>
      <Router>
        {/* <Switch> */}
        <main className="flex h-screen relative">
          <Primary />
          <Secondary />
        </main>
        <Route exact path="/Function">
          <Layout />
        </Route>
        {/* </Switch> */}
      </Router>
    </Suspense>
  );
}

function Layout() {
  return <h2>About</h2>;
}
export default hot(module)(withProvider(App));
