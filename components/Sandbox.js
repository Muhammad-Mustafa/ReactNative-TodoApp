import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Sandbox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.boxOne}>one</Text>
      <Text style={styles.boxTwo}>Two</Text>
      <Text style={styles.boxThree}>Three</Text>
      <Text style={styles.boxFour}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 40,
    backgroundColor: '#333',
  },
  boxOne: {
    backgroundColor: 'violet',
    paddingTop: 10,
  },
  boxTwo: {
    backgroundColor: 'gold',
    paddingTop: 10,
  },
  boxThree: {
    backgroundColor: 'coral',
    paddingTop: 10,
  },
  boxFour: {
    backgroundColor: 'skyblue',
    paddingTop: 10,
  },
});

export default Sandbox;
