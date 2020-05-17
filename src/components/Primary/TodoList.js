import React, { memo } from 'react';
import styled from 'styled-components';
import Circle from '../Circle';
import { Link } from 'react-router-dom';
import config from '../../../tailwind.config';

const StyleWrapper = styled.div`
  margin-top: 108px;
  width: 445px;
`;

StyleWrapper.Item = styled.div.attrs({
  className: `flex text-secondary border-b border-secondary border-opacity-20  h-8 mb-2`,
})``;

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

function TodoList({ todoList, currentCountDown, handleCurrentCountDownChanges }) {
  return (
    <StyleWrapper>
      {todoList
        ?.filter((s) => s.uuid !== currentCountDown.uuid)
        .map(
          (s, index) =>
            index < 3 && (
              <StyleWrapper.Item key={s.uuid}>
                <Circle width={2} color={config.theme.colors.secondary} className="w-6 h-6 mr-1" />
                <StyleWrapper.Title>{s.title}</StyleWrapper.Title>
                <StyleWrapper.Play className="material-icons" onClick={(e) => handleCurrentCountDownChanges(s, e)}>
                  play_circle_outline
                </StyleWrapper.Play>
              </StyleWrapper.Item>
            )
        )}
      <footer className="text-right">
        <Link to="/Function" className="text-primary font-bold uppercase select-none">
          more
        </Link>
      </footer>
    </StyleWrapper>
  );
}

export default memo(TodoList);
