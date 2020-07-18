import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Add(props) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    </Svg>
  );
}

export default Add;
