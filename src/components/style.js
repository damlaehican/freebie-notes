import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = {
  components: {
    button: StyleSheet.create({
      container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        width: Width / 1.15,
        height: Height / 17,
        backgroundColor: '#FF5227',
        borderWidth: 1,
        borderRadius: 25,
        borderColor: '#FF5227',
        padding: 5,
        margin: 10,
      },
      text: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
      },
    }),
    input: StyleSheet.create({    
      container: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        alignSelf: 'center',
        width: Width / 1.12,
        height: Height / 17,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#FFFFFF',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowColor: '#000000',
        shadowOffset: { height: 0, width: 0 },
        paddingHorizontal: 30,
        margin: 15,
      },
    }),  
    appName: StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginVertical: 15,
      },
      textStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FF5227',
      }
    }),
  }
};      

export default styles;