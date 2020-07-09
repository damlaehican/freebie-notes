import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

const AppName = props => {
    return(
        <View style={styles.components.appName.container}>
            <Text style={[styles.components.appName.textStyle, {...props.style}]}>FreebieNotes</Text>
        </View>
    );
    
};

export {AppName};