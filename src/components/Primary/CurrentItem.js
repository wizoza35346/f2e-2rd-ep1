import React, { useContext, memo } from 'react';
import styled from 'styled-components';
import Circle from '../Circle';
import config from '../../../tailwind.config';
import App from '../../contexts/App';
import { range } from '../../utils/Enumerable';

const StyleWrapper = styled.div`
  margin-top: 145px;
  width: 454px;
`;

StyleWrapper.Title = styled.p.attrs({
  className: 'leading-7 text-secondary mb-2 text-2xl font-bold uppercase',
})``;

StyleWrapper.Time = styled.p.attrs({
  className: 'text-primary font-bold',
})`
  font-size: 176px;
  line-height: 206px;
`;

function CurrentItem() {
  const { currentCountDown } = useContext(App);
  return (
    <StyleWrapper>
      <div className="flex">
        <Circle width={2} color={config.theme.colors.secondary} hover className="mr-4 w-12 h-12" />
        <div>
          <StyleWrapper.Title>{currentCountDown?.title}</StyleWrapper.Title>
          <div className="leading-3">
            {range(1, currentCountDown.repeat).map((r) => (
              <Circle key={r} fillBg color={config.theme.colors.secondary} className="w-3 h-3 mr-2" />
            ))}

            <Circle className="w-3 h-3" />
          </div>
        </div>
      </div>
      <StyleWrapper.Time>25:00</StyleWrapper.Time>
    </StyleWrapper>
  );
}
export default memo(CurrentItem);
