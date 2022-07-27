import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Fab} from '../components/Fab';

export const CounterScreen = () => {
  const [counter, setCounter] = React.useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>

      <Fab title="+ 1"  position='bottom-right' onPress={() => setCounter(counter + 10)} />
      <Fab title="- 1" position='bottom-left' onPress={() => setCounter(counter - 10)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  title: {
    top: -100,
    fontSize: 40,
    borderRadius: 100,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
