import React from 'react';
import styled from 'styled-components';

import { Switch, useLocation } from 'react-router-dom';
import { Transition, SwitchTransition } from 'react-transition-group';

// ref
// React Router Dom
// https://medium.com/@ger86/react-how-to-animate-transitions-between-react-router-routes-7f9cb7f5636a
// Styled Components
// https://dev.to/terrierscript/styled-component--react-transition-group--very-simple-transition-jja

const appearDuration = 150;

export const TransitionSwitch = styled.div`
  transition: opacity ${(props) => props.timeout}ms;
  opacity: ${({ state }) => {
    switch (state) {
      case 'entered':
        return 1;
      case 'entering':
        return 0;
      case 'exited':
        return 1;
      case 'exiting':
        return 0;
    }
  }};
`;

function FadeSwitch({ mode, children }) {
  const location = useLocation();

  return (
    <SwitchTransition mode={mode || 'out-in'}>
      <Transition key={location.pathname} timeout={appearDuration}>
        {(state) => (
          <TransitionSwitch state={state} timeout={appearDuration}>
            <Switch location={location}>{children}</Switch>
          </TransitionSwitch>
        )}
      </Transition>
    </SwitchTransition>
  );
}

export default FadeSwitch;
