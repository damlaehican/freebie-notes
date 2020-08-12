import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';

function Dots(props) {
  return (
    <Svg viewBox="0 0 512 512" {...props}>
      <Circle
        cx={256}
        cy={256}
        r={64}
        data-original="#000000"
        className="prefix__active-path"
        data-old_color="#000000"
        fill="#FF5227"
      />
      <Circle
        cx={256}
        cy={448}
        r={64}
        data-original="#000000"
        className="prefix__active-path"
        data-old_color="#000000"
        fill="#FF5227"
      />
      <Circle
        cx={256}
        cy={64}
        r={64}
        data-original="#000000"
        className="prefix__active-path"
        data-old_color="#000000"
        fill="#FF5227"
      />
    </Svg>
  );
}

export default Dots;
