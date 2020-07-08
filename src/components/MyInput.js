import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './style';

const MyInput = props => {
    return(
        <View style={styles.components.input.container} >
            <TextInput 
                placeholder={props.holder} 
                placeholderTextColor="grey"
                onChangeText={props.changeText}
                secureTextEntry={props.secureText}
                autoCapitalize={props.capital}
                keyboardType={props.keyboard}
            />
        </View>
    );
    
};

export {MyInput};