import React, {useState, useEffect} from 'react';
import {View, Text, Dimensions, StyleSheet} from 'react-native';
import {Clock} from '../components/SVGR-Components';

const NoteCard = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={styles.container}>
        <Text style={{fontSize: 12, color: '#FF5227'}}>{props.date}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{props.title}</Text>
        <Text style={{fontSize: 14}} numberOfLines={5}>
          {props.icerik}
        </Text>
        <View style={styles.clockView}>
          <Clock fill="#FF5227" width={18} height={18} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    marginTop: 20,
  },
  clockView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    bottom: 5,
    right: 5,
  },
});
export default NoteCard;
