/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FlagIcon = () => (
  <Svg width={30} height={30} viewBox="0 0 24 24">
    <Path
      d="M4 4h2v16h14V6h2V4H4zm2 0v2h10v10H6V4z"
      fill="pink"
    />
  </Svg>
);

export default FlagIcon;
