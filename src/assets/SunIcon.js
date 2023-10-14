/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, { Circle, Line } from 'react-native-svg';
const SunIcon = () => (
  <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100">
    <Circle cx="50" cy="50" r="15" fill="yellow" />
    <Line x1="50" y1="10" x2="50" y2="90" stroke="yellow" stroke-width="2" />
    <Line x1="10" y1="50" x2="90" y2="50" stroke="yellow" stroke-width="2" />
    <Line x1="30" y1="30" x2="70" y2="70" stroke="yellow" stroke-width="2" />
    <Line x1="30" y1="70" x2="70" y2="30" stroke="yellow" stroke-width="2" />
    <Circle cx="50" cy="50" r="7" fill="yellow" />
  </Svg>
);
export default SunIcon;
