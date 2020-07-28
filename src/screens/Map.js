import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import Modal from 'react-native-modal';

const Map = (props) => {
  const coordNotes = {
    latitude: 40.58,
    longitude: 31.096,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  return (
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        initialRegion={coordNotes}>
        <Marker coordinate={coordNotes}>
          <Callout>
            <View>
              <Text>Görev Başlıkları Gelecek</Text>
            </View>
          </Callout>
        </Marker>
        <Marker coordinate={coordNotes} />
      </MapView>
    </View>
  );
};
export {Map};
