import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import routes from '../api/Routes.json';

function Secondary(props) {
  return (
    <div className="w-secondaryh-full flex-grow flex-shrink-0 bg-secondary flex justify-start items-center">
      <div className="w-secondary h-app pr-app-w py-app-h">
        <div className="flex flex-col w-full h-full items-end">
          {routes.map((s) => (
            <Link
              key={s.pathName}
              to={s.pathName}
              className="material-icons text-white mb-12 select-none"
              style={{ fontSize: '36px' }}
            >
              {s.icon}
            </Link>
          ))}

          <span className="mt-auto text-2xl text-white font-bold uppercase" style={{ writingMode: 'vertical-lr' }}>
            POMODORO
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(Secondary);
