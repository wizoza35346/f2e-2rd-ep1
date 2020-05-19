import React, { memo, useRef, useEffect, useState, useCallback } from 'react';
import audioList from '../../api/audio_list.json';

import Collapse from './Collapse';
import Radio from '../RadioInput';

function Ringtones() {
  const [rings, setRings] = useState([]);
  const [selectedRings, setSelectedRings] = useState({ work: '', break: '' });
  const audio = useRef(null);

  const handlePlay = useCallback((e) => {
    const fileName = e.target.value;
    const action = e.target.name;
    audio.current?.pause();

    setSelectedRings((prevState) => ({
      ...prevState,
      [action]: fileName,
    }));

    if (fileName === 'none') return;
    audio.current = new Audio(`./audio/${fileName}`);
    audio.current.loop = true;
    audio.current.play();
  }, []);

  useEffect(() => {
    setRings(
      audioList.map((fileName) => {
        const matched = fileName.match(/(.*).mp3|(none)/);
        const title = (matched[1] || matched[2]).replace(/_/g, ' ');
        return { fileName, title };
      })
    );
    return () => {
      audio.current?.pause();
    };
  }, []);

  return ['work', 'break'].map((action) => (
    <Collapse title={action} key={action}>
      {rings.map((r) => (
        <div key={r.title} className="w-1/3 mb-4">
          <Radio
            label={r.title}
            id={`${action}_${r.title}`}
            value={r.fileName}
            checked={r.fileName === selectedRings[action]}
            name={action}
            onChange={handlePlay}
          />
        </div>
      ))}
    </Collapse>
  ));
}

export default memo(Ringtones);
