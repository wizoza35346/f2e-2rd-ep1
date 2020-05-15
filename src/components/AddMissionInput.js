import React, { useState } from 'react';
import styled from 'styled-components';

const AddMission = styled.div`
  position: relative;
  width: 445px;
  height: 56px;

  > input {
    width: 100%;
    padding: 1rem;
    /* color: #ff4384; */
    font-weight: bold;
    text-transform: uppercase;

    &::placeholder {
      /* color: #ff4384; */
      font-style: italic;
      font-weight: bold;
      text-transform: uppercase;
    }

    ~ span {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

function AddMissionInput({ value, onChange }) {
  return (
    <AddMission>
      <input
        type="text"
        className="text-primary placeholder-primary p-4"
        placeholder="add a new mission..."
        value={value}
        onChange={onChange}
      />
      <span className="material-icons m-4 text-primary bg-white">add</span>
    </AddMission>
  );
}

export default AddMissionInput;
