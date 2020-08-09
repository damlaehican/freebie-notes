import * as React from 'react';
import Svg, {LinearGradient, Stop, Path} from 'react-native-svg';

function User(props) {
  return (
    <Svg viewBox="0 2 98 98" width={512} height={512} {...props}>
      <LinearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={49}
        y1={95.667}
        x2={49}
        y2={-0.015}
        gradientTransform="matrix(1 0 0 -1 0 104)">
        <Stop offset={0} stopColor="#ff9800" />
        <Stop offset={1} stopColor="#e65100" />
      </LinearGradient>
      <Path
        d="M49 53.3c11.2 0 20.4-9.2 20.4-20.4S60.2 12.5 49 12.5s-20.4 9.2-20.4 20.4S37.8 53.3 49 53.3zm0-34.9c7.9 0 14.4 6.5 14.4 14.4S56.9 47.2 49 47.2s-14.4-6.5-14.4-14.4S41.1 18.4 49 18.4z"
        fill="url(#prefix__a)"
      />
      <LinearGradient
        id="prefix__b"
        gradientUnits="userSpaceOnUse"
        x1={49}
        y1={95.667}
        x2={49}
        y2={-0.015}
        gradientTransform="matrix(1 0 0 -1 0 104)">
        <Stop offset={0} stopColor="ff9800" />
        <Stop offset={1} stopColor="#f57c00" />
      </LinearGradient>
      <Path
        d="M49 60.5c-17.9 0-32 14.5-32 33.1h6c0-15.4 11.2-27.1 26-27.1s26 11.7 26 27.1h6C81 75 66.9 60.5 49 60.5z"
        fill="url(#prefix__b)"
      />
    </Svg>
  );
}

export default User;
