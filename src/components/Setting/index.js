import React, { memo, useContext, useEffect, useState, useCallback } from 'react';
import { Route, useLocation, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

import App from '../../contexts/App';
import config from '../../../tailwind.config';

import Aside from './Aside';
import FadeSwitch from '../FadeSwitch';
import Todo from './Todo';
import Ringtones from './Ringtones';
import Analytics from './Analytics';

const StyleWrapper = styled.div.attrs({
  className: 'absolute inset-0 z-50 flex justify-center items-center',
})`
  background-color: ${(props) => props.bgColor};
  transition: opacity ${(props) => props.timeout}ms ease-in;
  opacity: ${(props) => (/enter/.test(props.state) ? 1 : 0)};
`;

StyleWrapper.Container = styled.div.attrs({
  className: 'flex h-app px-app-w py-app-h relative overflow-hidden',
})`
  width: ${(props) => props.width};
`;

StyleWrapper.Main = styled.main`
  margin-left: 125px;
  width: 445px;
`;

function Setting({ state, timeout, handleClose }) {
  const { currentCountDown, handleTomatoState } = useContext(App);

  return (
    <StyleWrapper state={state} timeout={timeout} bgColor={config.theme.colors.secondary}>
      <StyleWrapper.Container width={config.theme.screens.xl}>
        <Aside currentCountDown={currentCountDown} handleTomatoState={handleTomatoState} />
        <StyleWrapper.Main>
          <FadeSwitch>
            <Route exact path={`/Setting`} component={Todo} />
            <Route path={`/Setting/Analytics`} component={Analytics} />
            <Route path={`/Setting/Ringtones`} component={Ringtones} />
          </FadeSwitch>
        </StyleWrapper.Main>

        <div className="ml-auto flex flex-col">
          <span onClick={handleClose} className="material-icons text-5xl text-white cursor-pointer select-none">
            close
          </span>
          <span className="mt-auto pl-4 text-2xl text-white font-bold uppercase" style={{ writingMode: 'vertical-lr' }}>
            POMODORO
          </span>
        </div>
      </StyleWrapper.Container>
    </StyleWrapper>
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

export default memo(SettingWrapper);
