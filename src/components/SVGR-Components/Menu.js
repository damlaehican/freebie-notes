import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Menu(props) {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="black" {...props}>
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </Svg>
  );
}

export default Menu;
