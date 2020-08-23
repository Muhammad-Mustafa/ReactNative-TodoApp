import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Alert,
} from 'react-native';

import Header from './components/Header';
import TodoItems from './components/TodoItems';
import AddTodo from './components/AddTodos';
import Sandbox from './components/Sandbox';

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'text 1', key: '1'},
    {text: 'text 2', key: '2'},
    {text: 'text 3', key: '3'},
  ]);

  const pressHandler = (key) => {
    return setTodos((prevTodos) => {
      return prevTodos.filter((todo) => key != todo.key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert(
        'Invalid Todo',
        'The Todo you want to enter is invalid please try again ',
        // [
        //   {
        //     text: 'ask me later',
        //     onPress: () => console.log('ask me later pressed'),
        //   },
        // ],
      );
    }
  };

  return (
    <>
      {/* <Sandbox /> */}

      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo submitHandler={submitHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({item}) => {
                  return <TodoItems item={item} pressHandler={pressHandler} />;
                }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    paddingTop: 50,
  },
});

export default App;
