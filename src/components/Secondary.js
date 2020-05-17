import React, { memo } from 'react';
import { Link } from 'react-router-dom';

function Secondary(props) {
  return (
    <div className="w-secondaryh-full flex-grow flex-shrink-0 bg-secondary flex justify-start items-center">
      <div className="w-secondary h-app pr-app-w py-app-h">
        <div className="flex flex-col w-full h-full items-end">
          <Link to="/" className="material-icons text-white" style={{ fontSize: '36px' }}>
            format_list_bulleted
          </Link>
          <Link to="/Function" className="material-icons text-white mt-12" style={{ fontSize: '36px' }}>
            poll
          </Link>
          <Link to="/Function" className="material-icons text-white mt-12" style={{ fontSize: '36px' }}>
            library_music
          </Link>

          <span className="mt-auto text-2xl text-white font-bold uppercase" style={{ writingMode: 'vertical-lr' }}>
            POMODORO
          </span>
        </div>
      </div>
    </div>
  );
}

export default memo(Secondary);
