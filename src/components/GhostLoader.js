import React from 'react';
import {View,Dimensions} from 'react-native';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {useTheme} from '@react-navigation/native';

const GhostLoader=props=>{
    const {colors} = useTheme();
    return(
        <View style={{flexDirection:'row'}}>
            <ShimmerPlaceHolder
                style={{
                height: 250,
                borderRadius: 40,
                backgroundColor: colors.secondary,
                width: Dimensions.get('window').width / 2.3,
                marginRight: 10,
                marginLeft: 10,
                marginLeft: 5,
                padding: 10,
                marginTop: 20,
                }}
                autoRun>
            </ShimmerPlaceHolder>
            <ShimmerPlaceHolder
                style={{
                height: 250,
                borderRadius: 40,
                backgroundColor: colors.secondary,
                width: Dimensions.get('window').width / 2.3,
                marginRight: 10,
                marginLeft: 10,
                marginLeft: 5,
                padding: 10,
                marginTop: 20,
                }}
                autoRun>
            </ShimmerPlaceHolder>
        </View>
    )
}
export {GhostLoader}