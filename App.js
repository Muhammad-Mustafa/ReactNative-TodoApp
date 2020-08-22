import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import Header from './components/Header';
import TodoItems from './components/TodoItems';

const App = () => {
  const [todos, setTodos] = useState([
    {text: 'text 1', key: '1'},
    {text: 'text 2', key: '2'},
    {text: 'text 3', key: '3'},
  ]);

  const pressHandler = (key) => {
    return (
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => key != todo.key)
    })  
    );
  };

  return (
    <>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* To from */}
          <View style={styles.list}>
            <FlatList data={todos} renderItem={({item}) => { return(<TodoItems item={item} pressHandler={pressHandler} />)}} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding: 40,
  },
  list:{
    paddingTop: 50,
  }
});

export default App;
