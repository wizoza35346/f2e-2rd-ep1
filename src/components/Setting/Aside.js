import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import config from '../../../tailwind.config';
import routes from '../../api/Routes.json';
import { Link } from 'react-router-dom';
import App from '../../contexts/App';
import tw from 'twin.macro';

const StyleWrapper = styled.aside.attrs({
  className: 'flex flex-col ',
})`
  width: 350px;
`;

StyleWrapper.NavItem = styled(Link).attrs({
  className: 'flex items-center text-4xl',
})`
  margin-bottom: 42px;
  line-height: 42px;
  color: ${(props) => (props.active ? props.activeColor : '#FFFFFF33')};
`;

StyleWrapper.Footer = styled.div.attrs({
  className: 'flex flex-col justify-end items-center absolute bottom-0 bg-white',
})`
  width: 350px;
  height: 175px;
  border-radius: 50% / 100% 100% 0 0;

  &::before {
    content: '';
    position: relative;
  }
`;

StyleWrapper.Play = styled.span.attrs({
  className: 'absolute top-0 flex justify-center items-center text-primary bg-secondary rounded-full',
})`
  width: 116px;
  height: 116px;
  transform: translateY(-50%);

  > span {
    font-size: 104px;
    width: 104px;
    height: 104px;
    color: ${(props) => props.color};
    border-color: ${(props) => props.color};
    ${tw`relative select-none cursor-pointer border-2 rounded-full flex justify-center items-center`}
    &:active {
      transform: scale(0.95);
    }
    &:after {
      content: '';
      display: block;
      z-index: -1;
      background-color: white;
      width: 50%;
      height: 50%;
      transform: translate(-50%, -50%);
      ${tw`absolute top-1/2 left-1/2 rounded-full`}
    }
  }
`;

function Aside({ currentCountDown, handleTomatoState }) {
  return (
    <StyleWrapper>
      <nav>
        {routes.map((r) => (
          <StyleWrapper.NavItem key={r.pathName} to={r.pathName}>
            <span className="material-icons text-4xl mr-2">{r.icon}</span>
            <span className="align-top uppercase">{r?.title}</span>
          </StyleWrapper.NavItem>
        ))}
      </nav>

      <StyleWrapper.Footer>
        <StyleWrapper.Play onClick={handleTomatoState} color={config.theme.colors.primary}>
          {/* <span className="material-icons text-6xl">play_arrow</span> */}
          <span className="material-icons">play_circle_filled</span>
        </StyleWrapper.Play>
        <p className="text-primary text-6xl font-bold" style={{ lineHeight: '75px' }}>
          25:00
        </p>
        <p className="leading-none text-secondary font-bold uppercase mb-6">{currentCountDown?.title}</p>
      </StyleWrapper.Footer>
    </StyleWrapper>
  );
}

export default Aside;
