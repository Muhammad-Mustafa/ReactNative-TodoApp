import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const TodoItems = ({item, pressHandler}) => {
  console.log(item);
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <Text style={styles.text}>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
  },
});

export default TodoItems;
