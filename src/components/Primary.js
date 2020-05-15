import React, { useState, useCallback, useContext } from 'react';
import AddMissionInput from './AddMissionInput';
import App from '../contexts/App';

function Primary(props) {
  const { newMission, handleMissionChanges, todoList, currentCountDown } = useContext(App);

  return (
    <div className="w-primary h-full flex-grow flex-shrink-0 bg-primary-100 flex justify-end items-center">
      <div className="w-primary h-app pl-app-w py-app-h">
        <AddMissionInput value={newMission} onChange={handleMissionChanges} />
        <div style={{ marginTop: '145px' }}>
          <div className="flex">
            <div className="mr-4 rounded-full border-2 border-secondary w-12 h-12"></div>
            <div>
              <p className="leading-7 text-secondary mb-2 text-2xl font-bold uppercase">{currentCountDown?.title}</p>
              <div className="leading-3">
                <span className="inline-block w-3 h-3 border border-primary rounded-full"></span>
              </div>
            </div>
          </div>

          <div className="text-primary font-bold" style={{ fontSize: '176px', lineHeight: '206px' }}>
            25:00
          </div>
        </div>

        <div style={{ marginTop: '107px', width: '445px' }}>
          {todoList
            .filter((s) => s.uuid !== currentCountDown.uuid)
            .map((s) => (
              <div key={s.uuid} className="text-secondary border-b border-secondary border-opacity-20  h-8 mb-2">
                <span className="inline-block w-6 h-6 border-2 border-secondary rounded-full mr-1"></span>
                <span className="align-top font-bold uppercase">{s.title}</span>
                <span className="material-icons float-right">play_circle_outline</span>
              </div>
            ))}
          <div className=" text-right">
            <a href="#" className="text-primary font-bold uppercase">
              more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Primary;
