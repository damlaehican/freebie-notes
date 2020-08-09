import * as React from 'react';
import Svg, {LinearGradient, Stop, Path} from 'react-native-svg';

function Delete(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <LinearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={256}
        y1={514}
        x2={256}
        y2={2}
        gradientTransform="matrix(1 0 0 -1 0 514)">
        <Stop offset={0} stopColor="#ffc107" />
        <Stop offset={1} stopColor="#ff6f00" />
      </LinearGradient>
      <Path
        d="M276 431.933h-40v-209h40v209zm80-209h-40v209h40v-209zm-160 0h-40v209h40v-209zM472 183h-40v269c0 33.084-26.916 60-60 60H140c-33.084 0-60-26.916-60-60V183H40v-50.067c0-33.084 26.916-60 60-60h61V60c0-33.084 26.916-60 60-60h70c33.084 0 60 26.916 60 60v12.933h61c33.084 0 60 26.916 60 60V183zM201 72.933h110V60c0-11.028-8.972-20-20-20h-70c-11.028 0-20 8.972-20 20v12.933zM392 183H120v269c0 11.028 8.972 20 20 20h232c11.028 0 20-8.972 20-20V183zm40-50.067c0-11.028-8.972-20-20-20H100c-11.028 0-20 8.972-20 20V143h352v-10.067z"
        fill="url(#prefix__a)"
      />
    </Svg>
  );
}

export default Delete;
