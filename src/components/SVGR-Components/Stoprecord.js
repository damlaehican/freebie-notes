import * as React from 'react';
import Svg, {G, Ellipse, Path, Rect} from 'react-native-svg';

function SvgStoprecord(props) {
  return (
    <Svg height="24" viewBox="0 0 58 58" width="24" {...props}>
      <G fillRule="nonzero" fill="none">
        <Ellipse cx={29} cy={29} fill="#FB7B76" rx={29} ry={28.875} />
        <Path
          d="M29 54.875C14.726 54.806 3.204 43.191 3.25 28.917 3.295 14.643 14.892 3.102 29.166 3.125 43.441 3.148 55 14.725 55 29c-.05 14.318-11.682 25.893-26 25.875zm0-49.75C15.83 5.194 5.204 15.913 5.25 29.083c.045 13.17 10.746 23.815 23.916 23.792C42.336 52.852 53 42.17 53 29 52.95 15.786 42.214 5.106 29 5.125z"
          fill="#C03A2B"
        />
        <Rect fill="#C03A2B" height={20} rx={2} width={20} x={19} y={19} />
      </G>
    </Svg>
  );
}

export default SvgStoprecord;
