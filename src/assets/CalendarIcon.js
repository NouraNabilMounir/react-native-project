/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarIcon = () => (
  <Svg width={30} height={30} viewBox="0 0 24 24">
    <Path
      d="M2 3h20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2zm1 1h18v13H3V5z"
      fill="blue"
    />
  </Svg>
);

export default CalendarIcon;
