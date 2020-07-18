import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  TextInput,
  Text,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import MyInput from '../components/MyInput';
import {
  Album,
  Add,
  Microphone,
  Light,
  Menu,
} from '../components/SVGR-Components/';

const AddNotePage = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <MyInput holder="Not defterlerinde ara" activeMenu={true} />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          top: 34,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Light width={200} height={200} fill="#FF5227" />
          <Text style={{fontSize: 25, fontWeight: 'bold', color: '#FF5227'}}>
            Eklediğiniz notlar burada görünür
          </Text>
        </View>

        <View
          style={{
            height: Dimensions.get('window').height / 12,
            backgroundColor: 'white',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 6,
            },
            shadowOpacity: 0.39,
            shadowRadius: 8.3,

            elevation: 13,
          }}>
          <View style={{paddingLeft: 10, paddingTop: 20, flexDirection: 'row'}}>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 100,
              }}>
              <Album width={35} height={35} fill="gray" />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: 30,
                height: 30,
                borderRadius: 100,
              }}>
              <Microphone width={35} height={35} fill="gray" paddingLeft={70} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'flex-end',
              bottom: 60,
              paddingRight: 20,
              margin: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 8,
              },
              shadowOpacity: 0.44,
              shadowRadius: 10.32,

              elevation: 16,
            }}>
            <TouchableOpacity
              style={{
                borderRadius: 100,
                borderWidth: 0.2,
                backgroundColor: '#FF5227',
                width: 60,
                height: 60,
                alignItems: 'center',
              }}>
              <View style={{}}>
                <Add width={60} height={60} fill="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default AddNotePage;
