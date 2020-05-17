import React, { useState, useEffect, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import data from '../api/Data';

const App = React.createContext();
export const AppWrapper = (Component) => (props) => {
  const [newMission, setNewMission] = useState('');
  const handleMissionChanges = useCallback((e) => {
    setNewMission(e.target.value);
  }, []);

  const handleMissionAdd = useCallback((e, mission) => {
    e.preventDefault();
    if (mission) {
      setTodoList((preValue) => [
        ...preValue,
        {
          uuid: uuidv4(),
          title: mission,
          status: 'N',
          repeat: 0,
          leftSeconds: 1500,
        },
      ]);
      setNewMission('');
    }
  }, []);

  const [todoList, setTodoList] = useState([]);
  const [currentCountDown, setCurrentCountDown] = useState({});

  const handleCurrentCountDownChanges = useCallback(
    (item) => {
      // TODO if倒數中 return;
      const index = todoList?.findIndex((t) => t.uuid === currentCountDown.uuid);
      setTodoList([...todoList?.slice(0, index), currentCountDown, ...todoList?.slice(index + 1)]);
      setCurrentCountDown(item);
    },
    [currentCountDown, todoList]
  );

  const handleTomatoState = useCallback(() => {}, []);

  useEffect(() => {
    setTodoList(data);
    setCurrentCountDown(data[0]);
  }, []);

  return (
    <App.Provider
      value={{
        newMission,
        handleMissionChanges,
        handleMissionAdd,
        todoList,
        currentCountDown,
        handleCurrentCountDownChanges,
      }}
    >
      <Component {...props}></Component>
    </App.Provider>
  );
};

export default App;
