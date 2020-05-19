import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import tw from 'twin.macro';
import { Transition } from 'react-transition-group';

const timeout = 300;

const StyledWrapper = styled.div`
  margin-bottom: 30px;
`;

StyledWrapper.Header = styled.div.attrs((props) => ({
  className: `py-2 px-4 flex font-bold text-white uppercase ${props.collapse ? 'cursor-pointer' : 'cursor-default'}`,
}))`
  background-color: #ffffff33;

  * {
    line-height: 28px;
    height: 28px;
    ${tw`text-2xl select-none`}
  }
`;
StyledWrapper.Body = styled.div.attrs({
  className: `flex flex-wrap pt-4 overflow-hidden`,
})`
  ${({ state, collapse }) =>
    collapse &&
    css`
      transition: max-height ${timeout}ms ease-in-out;
      max-height: ${/enter/.test(state) ? 0 : 1000}px;
    `}
`;

function Collapse({ collapse, title, children }) {
  const [state, setState] = useState(false);

  function ControlCollapse() {
    if (!collapse) return null;
    return state ? (
      <span className="material-icons">arrow_drop_down</span>
    ) : (
      <span className="material-icons">arrow_drop_up</span>
    );
  }

  function handleCollapse() {
    if (!collapse) return;
    setState(!state);
  }

  return (
    <StyledWrapper>
      <StyledWrapper.Header collapse={collapse} onClick={handleCollapse}>
        <h3>{title}</h3>
        <div className="ml-auto">
          <ControlCollapse />
        </div>
      </StyledWrapper.Header>

      <Transition in={state && collapse} timeout={timeout}>
        {(state) => (
          <StyledWrapper.Body state={state} collapse={collapse}>
            {children}
          </StyledWrapper.Body>
        )}
      </Transition>
    </StyledWrapper>
  );
}

export default Collapse;
