import React from 'react'
import { SafeAreaView, View, Text, StyleSheet } from 'react-native'
import { useTheme } from "@react-navigation/native";

const Favourites = props => {

    const { colors } = useTheme();
    const styles = customStyles(colors);

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.text}>Favoriler</Text>
            </View>
        </SafeAreaView>
    )
}
export default Favourites

const customStyles = (colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: colors.background,
        },
        text: {
            color: colors.text,
        }
    });