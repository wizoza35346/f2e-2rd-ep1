import React, { useState, useEffect, useRef } from 'react';
import { hot } from 'react-hot-loader';

import withProvider from './contexts';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Primary from './components/Primary';
import Secondary from './components/Secondary';

function App() {
  return (
    <>
      <Router>
        {/* <Switch> */}
        <main className="flex h-screen relative">
          <Primary />
          <Secondary />
          <Cloak />
        </main>
        <Route exact path="/Function">
          <Layout />
        </Route>
        {/* </Switch> */}
      </Router>
    </>
  );
}

function Cloak() {
  const sss = useRef(0);
  const p = useRef(0);
  const [bgParam, setBgParam] = useState({
    firstCircle: {
      degree: 90,
      color1: 'white',
      color2: 'transparent',
    },
    secondCircle: {
      degree: 90,
      color1: '#FF4384',
      color2: 'transparent',
    },
  });

  useEffect(() => {
    p.current = setInterval(calcBgParam, 200);
    return () => {
      sss.current = 0;
      clearInterval(p.current);
    };
  }, []);

  const calcBgParam = () => {
    sss.current += 1;
    const percentage = sss.current / 200;
    console.log(sss.current, percentage);

    if (percentage <= 0.5) {
      setBgParam({
        ...bgParam,
        secondCircle: {
          ...bgParam.secondCircle,
          degree: (bgParam.secondCircle.degree += (270 - 90) / 100),
        },
      });
      return;
    }
    setBgParam({
      ...bgParam,
      firstCircle: {
        color1: 'transparent',
        color2: '#FF4384',
        degree: (bgParam.firstCircle.degree += (270 - 90) / 100),
      },
    });

    if (percentage >= 1) {
      clearInterval(p.current);
      sss.current = 0;
      setTimeout(() => {
        alert('task over');
      }, 300);
    }
  };

  const { firstCircle: f, secondCircle: s } = bgParam;
  return (
    <div
      className="border-4 border-primary rounded-full absolute"
      style={{
        width: '540px',
        height: '540px',
        top: '130px',
        left: '560px',
        background: `linear-gradient(${f.degree}deg, ${f.color1} 50%, ${f.color2} 50%),linear-gradient(${s.degree}deg, ${s.color1} 50%, ${s.color2} 50%)`,
      }}
    >
      <div
        className="border-4 border-primary rounded-full absolute bg-primary p-4"
        style={{ width: '508px', height: '508px', top: '.75rem', left: '.75rem' }}
      >
        <span
          className="material-icons absolute text-white play-button"
          style={{ fontSize: '6rem', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        >
          play_circle_filled
        </span>
        {/* <span class="material-icons">pause_circle_filled</span> */}
      </div>
    </div>
  );
}
function Layout() {
  return <h2>About</h2>;
}
export default hot(module)(withProvider(App));
