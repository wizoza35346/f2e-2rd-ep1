import React, { memo } from 'react';
import styled from 'styled-components';
import config from '../../tailwind.config';

const StyleWrapper = styled.form`
  position: relative;
  width: 445px;
  height: 56px;

  > input {
    width: 100%;
    padding: 1rem;
    font-weight: bold;
    color: ${(props) => props.color};
    text-transform: uppercase;
    transition: outline-color 500ms ease;
    outline-color: transparent;

    &:focus {
      outline-color: ${(props) => props.color};
    }

    &::placeholder {
      font-style: italic;
      font-weight: bold;
      color: ${(props) => props.color};
      text-transform: uppercase;
    }

    ~ span {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
`;

function AddMissionInput({ newMission, handleMissionChanges, handleMissionAdd }) {
  return (
    <StyleWrapper onSubmit={(e) => handleMissionAdd(e, newMission)} color={config.theme.colors.primary}>
      <input type="text" placeholder="add a new mission..." value={newMission || ''} onChange={handleMissionChanges} />
      <span className="material-icons m-4 text-primary bg-white select-none">add</span>
    </StyleWrapper>
  );
}

export default memo(AddMissionInput);
