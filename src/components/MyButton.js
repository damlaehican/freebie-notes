import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './style';

const MyButton = props => {
    return(
        <TouchableOpacity onPress={props.pressButton} style={styles.components.button.container}>
            <Text style={styles.components.button.text}>{props.buttonName}</Text>
        </TouchableOpacity>
    );
    
};

export {MyButton};