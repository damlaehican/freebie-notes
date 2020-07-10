import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, } from 'react-native';
import styles from './style';

import { Eye, EyeOff } from "../components/SVGR-Components";


const MyInput = (props) => {
  const [isSecure, setIsSecure] = useState(props.secureText)

  secureTextHandler = () => {
    setIsSecure(!isSecure)
  }

  return (
    <View style={styles.components.input.container}>
      <TextInput
        style={{ flex: 1 }}
        placeholder={props.holder}
        placeholderTextColor="grey"
        onChangeText={props.changeText}
        secureTextEntry={isSecure}
        autoCapitalize={props.capital}
        keyboardType={props.keyboard}
      />
      {
        isSecure !== undefined ?
          <TouchableOpacity onPress={secureTextHandler}>
            {
              isSecure ? <EyeOff /> : <Eye />
            }
          </TouchableOpacity>
          :
          null
      }
    </View>
  );
};

export { MyInput };
