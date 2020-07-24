import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from './style';

import {Eye, EyeOff, Menu} from '../components/SVGR-Components';

const MyInput = (props) => {
  const [isSecure, setIsSecure] = useState(props.secureText);

  const secureTextHandler = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={[styles.components.input.container, {...props.style}]}>
      <TextInput
        style={[
          {flex: 1, backgroundColor: 'white', padding: 12},
          {...props.style},
        ]}
        placeholder={props.holder}
        placeholderTextColor="grey"
        onChangeText={props.changeText}
        secureTextEntry={isSecure}
        autoCapitalize={props.capital}
        keyboardType={props.keyboard}
        {...props.menu}
      />
      {isSecure !== undefined ? (
        <TouchableOpacity onPress={secureTextHandler}>
          {isSecure ? <EyeOff /> : <Eye />}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default MyInput;
