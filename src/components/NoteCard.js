import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Clock} from '../components/SVGR-Components';

const NoteCard = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={{
          flexDirection: 'column',
          height: 250,
          borderRadius: 10,
          backgroundColor: 'white',
          width: Dimensions.get('window').width / 2.3,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          marginLeft: 5,
          paddingLeft: 10,
          marginTop: 10,
        }}>
        <Text style={{fontSize: 12, color: '#FF5227'}}>{props.date}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{props.title}</Text>
        <Text style={{fontSize: 14}}>{props.icerik}</Text>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            bottom: 5,
            right: 5,
          }}>
          <Clock fill="#FF5227" width={18} height={18} />
        </View>
      </View>
    </View>
  );
};
export default NoteCard;
