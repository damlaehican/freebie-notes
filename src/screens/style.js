import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = {
    pages: {
        loginPage: StyleSheet.create({
            container: {
                flex: 1,
                backgroundColor: '#FFFFFF',
            },
            logoContainer: {
                alignItems: 'center',
                alignSelf: 'center',
                justifyContent: 'center',
                marginVertical: 40,
            },
            googleLoginContainer: {
                width: Width / 1.2,
                height: Height / 14.5,
                backgroundColor: '#FFFFFF',
                alignSelf: 'center',
                justifyContent: 'center',
                borderRadius: 25,
                shadowOpacity: 0.1,
                shadowRadius: 5,
                shadowColor: '#000000',
                shadowOffset: { height: 0, width: 0},
                marginVertical: 10,
            },
            googleIcon: {
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 15,
            },
            googleText: {
                color: '#BDAAAA',
                fontWeight: 'bold',
                fontSize: 20,
            },
        }),
        signUpPage: StyleSheet.create({
            container: {
                flex:1,
                backgroundColor:'#FF5227',
            },
            logoContainer: {
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 40,
            },
            imageBackground: {
                flex:1,
            },
            safeAreaView: {
                flex:1,
            },
        })
    },
};
export default styles;    