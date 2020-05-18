import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import config from '../../../tailwind.config';
import App from '../../contexts/App';

import Aside from './Aside';
import FadeSwitch from '../FadeSwitch';
import { Route, useRouteMatch, Link, useLocation } from 'react-router-dom';

const StyleWrapper = styled.div.attrs({
  className: 'absolute inset-0 z-50 flex justify-center items-center',
})`
  background-color: ${(props) => props.bgColor};
  transition: opacity ${(props) => props.timeout}ms ease-in;
  opacity: ${(props) => (props.state !== 'entered' ? 0 : 1)};
`;

StyleWrapper.Container = styled.div.attrs({
  className: 'flex h-app px-app-w py-app-h relative overflow-hidden',
})`
  width: ${(props) => props.width};
`;

StyleWrapper.Main = styled.main`
  margin-left: 125px;
  width: 454px;
`;

function Setting({ state, timeout, handleClose }) {
  const { currentCountDown, handleTomatoState } = useContext(App);

  return (
    <StyleWrapper state={state} timeout={timeout} bgColor={config.theme.colors.secondary}>
      <StyleWrapper.Container width={config.theme.screens.xl}>
        <Aside currentCountDown={currentCountDown} handleTomatoState={handleTomatoState} />
        <StyleWrapper.Main className="flex">
          <FadeSwitch>
            <Route exact path={`/Setting`} component={() => <div>Setting</div>} />
            <Route path={`/Setting/Analytics`} component={() => <div>Analytics</div>} />
            <Route path={`/Setting/Ringtones`} component={() => <div>Ringtones</div>} />
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

export default memo(Setting);
