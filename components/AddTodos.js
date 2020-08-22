import React, {useState} from 'react';

import {View, Text, StyleSheet, Button, TextInput} from 'react-native';

const AddTodo = ({submitHandler}) => {
  const [text, setText] = useState('');

  const handelChange = (val) => {
    setText(val);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="New Todo ..."
        onChangeText={handelChange}
      />

      <Button
        onPress={() => submitHandler(text)}
        title="Add Todo"
        color="coral"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default AddTodo;
