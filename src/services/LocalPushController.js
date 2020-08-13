import React, {useEffect, useState} from 'react';
import PushNotification from 'react-native-push-notification';
import firebase from 'firebase';
import auth from '@react-native-firebase/auth';

const user = auth().currentUser;

PushNotification.configure({
  onNotification: function (notification) {
    console.log('LOCAL NOTIFICATION ==>', notification);
  },

  popInitialNotification: true,
  requestPermissions: true,
});

export const LocalNotification = (props) => {
  return PushNotification.localNotification({
    autoCancel: true,
    bigText:
      'This is local notification demo in React Native app. Only shown, when expanded.',
    subText: 'Local Notification',
    title: 'Hello',
    message: 'Expand me to see more',
    vibrate: true,
    vibration: 300,
    playSound: true,
    soundName: 'default',
  });
};
