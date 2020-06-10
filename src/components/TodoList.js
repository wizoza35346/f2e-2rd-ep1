import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import Circle from './Circle';
import config from '../../tailwind.config';

const StyleWrapper = styled.div``;
StyleWrapper.Item = styled.div.attrs({
  className: `flex text-secondary border-b border-secondary border-opacity-20 h-8 mb-2`,
})`
  ${({ light }) =>
    light &&
    css`
      color: white;
      border-color: rgba(255, 255, 255, 0.3);
    `}
`;

StyleWrapper.Title = styled.span.attrs({
  className: `font-bold uppercase cursor-default`,
})``;

StyleWrapper.Play = styled.span.attrs({
  className: ` ml-auto cursor-pointer select-none`,
})`
  &:active {
    transform: scale(0.95);
  }
`;

function TodoList({ light, maxLength, todoList, currentCountDown, handleCurrentCountDownChanges }) {
  return (
    <StyleWrapper>
      {todoList
        .filter(s => s.uuid !== currentCountDown.uuid)
        .filter((_, index) => (maxLength ? index < maxLength : true))
        .map(s => (
          <StyleWrapper.Item key={s.uuid} light={light}>
            <span className="material-icons select-none cursor-pointer w-6 h-6 mr-1">radio_button_unchecked</span>
            <StyleWrapper.Title>{s.title}</StyleWrapper.Title>
            <StyleWrapper.Play className="material-icons" onClick={e => handleCurrentCountDownChanges(s, e)}>
              play_circle_outline
            </StyleWrapper.Play>
          </StyleWrapper.Item>
        ))}
    </StyleWrapper>
  );
}

export default memo(TodoList);
