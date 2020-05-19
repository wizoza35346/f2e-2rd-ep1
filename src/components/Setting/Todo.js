import React, { useContext, memo } from 'react';

import config from '../../../tailwind.config';
import AddMissionInput from '../AddMissionInput';
import App from '../../contexts/App';
import Collapse from './Collapse';
import TodoList from '../TodoList';

function Todo(props) {
  const {
    newMission,
    handleMissionChanges,
    handleMissionAdd,
    todoList,
    currentCountDown,
    handleCurrentCountDownChanges,
  } = useContext(App);

  return (
    <>
      <div className="mb-12">
        <AddMissionInput
          newMission={newMission}
          handleMissionChanges={handleMissionChanges}
          handleMissionAdd={handleMissionAdd}
        />
      </div>
      <Collapse title="to-do" collapse>
        <div className="w-full">
          <TodoList
            light
            color={config.theme.colors.white}
            borderColor="#FFFFFF33"
            todoList={todoList}
            currentCountDown={currentCountDown}
            handleCurrentCountDownChanges={handleCurrentCountDownChanges}
          ></TodoList>
        </div>
      </Collapse>
      <Collapse title="done" collapse>
        <div className="w-full">
          <TodoList
            light
            todoList={todoList}
            currentCountDown={currentCountDown}
            handleCurrentCountDownChanges={handleCurrentCountDownChanges}
          ></TodoList>
        </div>
      </Collapse>
    </>
  );
}

export default memo(Todo);
