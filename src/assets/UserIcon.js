/* eslint-disable prettier/prettier */
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const UserIcon = () => (
  <Svg width={30} height={30} viewBox="0 0 24 24">
    <Path
      d="M12 2C7.03 2 3 6.03 3 11a9 9 0 0 0 9 9 9 9 0 0 0 9-9c0-4.97-4.03-9-9-9zm0 16.2c-2.76 0-5.13-1.5-6.43-3.75A7.91 7.91 0 0 0 4.8 11a8 8 0 0 1 12.72-6.45 10.59 10.59 0 0 1 .47 3.45 5.99 5.99 0 0 1-5.97 6zM12 6c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-5.33 1.34-8 4h16c-2.67-2.66-5.33-4-8-4z"
      fill="blue"
    />
  </Svg>
);

export default UserIcon;
