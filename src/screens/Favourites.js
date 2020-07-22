import React, { useContext } from 'react'
import { SafeAreaView, View, Text, StyleSheet} from 'react-native'
import Context from '../context/store';

const Favourites = props => {

    const { state, dispatch } = useContext(Context);
    const themeColor = state.themeColors[state.currentTheme];
    const styles = customStyles(themeColor)

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>Favoriler</Text>
            </View>
        </SafeAreaView>
    )
}
export default Favourites

const customStyles = (themeColor) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: themeColor.backgroundColor,
        },
        text: {
            color: themeColor.textColor,
        }
    });