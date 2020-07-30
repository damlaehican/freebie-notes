/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {Button, View} from 'react-native';

import Voice from '@react-native-community/voice';

function MicButton({lang, func}) {
  useEffect(() => {
    const onSpeechResults = (e) => {
      func(e.value);
    };
    Voice.onSpeechResults = onSpeechResults;
    return () => {
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const startRecognizing = async () => {
    func([]);
    try {
      await Voice.start(lang);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View>
      <Button title="Başla" onPress={() => startRecognizing()} />
    </View>
  );
}

export {MicButton};
