import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const TodoItems = ({item, pressHandler}) => {
  console.log(item);
  return (
    <View style={styles.items}>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Icon name="delete" size={18} color="#333" />
      </TouchableOpacity>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
  text: {
    paddingLeft: 10,
  },
});

export default TodoItems;
