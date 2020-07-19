import React from 'react';
import {
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  Dimensions,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
const MainScreen = (props) => {
  return (
    <View style={styles.container}>
      <View>
        <ScrollView horizontal={true} indicatorStyle="white">
          <ImageBackground
            source={require('../assets/main2.png')}
            style={styles.image}>
            <LinearGradient
              colors={['rgba(0,0,0,0.9)', 'transparent']}
              start={{x: 0, y: 1}}
              end={{x: 0, y: -1}}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: Height,
                paddingTop: 80,
              }}>
              <Text style={styles.imageText}>U</Text>
              <Text style={styles.imageText}>S</Text>
              <Text style={styles.imageText}>E</Text>
              <Text style={styles.imageText}>F</Text>
              <Text style={styles.imageText}>U</Text>
              <Text style={styles.imageText}>L</Text>
            </LinearGradient>
          </ImageBackground>
          <ImageBackground
            source={require('../assets/main1.png')}
            style={styles.image}>
            <LinearGradient
              colors={['rgba(0,0,0,0.9)', 'transparent']}
              start={{x: 0, y: 1}}
              end={{x: 0, y: -1}}
              style={{
                position: 'absolute',
                left: 0,
                right: 0,
                top: 0,
                height: Height,
                paddingTop: 80,
              }}>
              <View style={{marginTop: 100}}>
                <Text style={styles.imageText}>F</Text>
                <Text style={styles.imageText}>R</Text>
                <Text style={styles.imageText}>E</Text>
                <Text style={styles.imageText}>E</Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </ScrollView>
      </View>
      <View style={styles.containerText}>
        <Text style={styles.text}>
          Henüz bir not defteri ya da not oluşturmadın. Başlayalım mı?
        </Text>
      </View>
      <View style={{paddingTop: 10}}>
        <TouchableOpacity
          style={styles.vectorImage}
          onPress={() => props.navigation.navigate('Tabs')}>
          <Image
            source={require('../assets/circle.png')}
            style={styles.vector}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    resizeMode: 'cover',
    width: Width,
    height: Height / 1.3,
    paddingTop: 80,
  },
  imageText: {
    paddingLeft: 20,
    alignItems: 'flex-start',
    fontSize: 64,
    color: '#FF8A65',
    lineHeight: 64,
    marginTop: 20,
  },
  text: {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: 20,
    alignSelf: 'center',
    fontSize: 25,
    color: '#FF8A65',
  },
  vectorImage: {
    alignSelf: 'center',
    backgroundColor: '#FF8A65',
    width: Width / 8,
    height: Height / 16,
    borderRadius: 100,
    margin: 5,
  },
  vector: {
    alignSelf: 'center',
    width: Width / 8,
    height: Height / 16,
  },
  containerText: {
    paddingBottom: 5,
  },
});

export {MainScreen};
