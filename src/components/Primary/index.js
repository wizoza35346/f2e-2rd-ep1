import React, { memo, useContext } from 'react';
import AddMissionInput from '../AddMissionInput';
import CurrentItem from './CurrentItem';
import TodoList from './TodoList';
import Clock from './Clock';
import App from '../../contexts/App';

function Primary() {
  const context = useContext(App);
  const {
    newMission,
    handleMissionChanges,
    handleMissionAdd,
    handleTomatoState,
    todoList,
    currentCountDown,
    handleCurrentCountDownChanges,
  } = context;
  console.log(context);

  return (
    <div className="w-primary h-full flex-grow flex-shrink-0 bg-primary-100 flex justify-end items-center">
      <div className="w-primary h-app pl-app-w py-app-h relative">
        <AddMissionInput
          newMission={newMission}
          handleMissionChanges={handleMissionChanges}
          handleMissionAdd={handleMissionAdd}
        />
        <CurrentItem currentCountDown={currentCountDown} />
        <TodoList
          todoList={todoList}
          currentCountDown={currentCountDown}
          handleCurrentCountDownChanges={handleCurrentCountDownChanges}
        />
        <Clock handleTomatoState={handleTomatoState} />
      </div>
    </div>
  );
}
export default memo(Primary);
