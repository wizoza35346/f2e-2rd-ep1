import React, { useState, useEffect, useCallback } from 'react';

import data from '../api/Data';

const App = React.createContext();
export const AppWrapper = (Component) => (props) => {
  const [newMission, setNewMission] = useState('');
  const handleMissionChanges = useCallback((e) => {
    setNewMission(e.target.value);
  });

  const [todoList, setTodoList] = useState([]);
  const [currentCountDown, setCurrentCountDown] = useState({});

  useEffect(() => {
    setTodoList(data);
    setCurrentCountDown(data[0]);
  }, []);

  return (
    <App.Provider value={{ newMission, handleMissionChanges, todoList, currentCountDown }}>
      <Component {...props}></Component>
    </App.Provider>
  );
};

export default App;
