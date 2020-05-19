import React, { memo } from 'react';
import Collapse from './Collapse';

function Analytics(props) {
  return (
    <>
      <Collapse title="focus time">
        <FocusTime title="today" count="20" />
        <FocusTime title="week" count="108" />
      </Collapse>
      <Collapse title="chart">
        <div>有空再說:(</div>
      </Collapse>
    </>
  );
}

const FocusTime = memo(function ({ title, count }) {
  return (
    <div className="w-1/2 mb-4">
      <p className="uppercase text-white font-bold">{title}</p>
      <div>
        <span className="text-primary text-6xl font-bold mr-2" style={{ lineHeight: '75px' }}>
          {count}
        </span>
        <span className="uppercase font-bold" style={{ color: '#FFFFFF33' }}>
          /tomato
        </span>
      </div>
    </div>
  );
});

export default Analytics;
