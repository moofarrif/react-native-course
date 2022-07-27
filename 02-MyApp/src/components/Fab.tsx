import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Platform,
  TouchableOpacity,
} from 'react-native';

interface FabProps {
  title: string;
  position?: 'bottom-right' | 'bottom-left';
  onPress: () => void;
}

export const Fab = ({title, onPress, position = 'bottom-right'}: FabProps) => {
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.75}
        onPress={onPress}
        style={[
          styles.fabLocation,
          position === 'bottom-left' ? styles.left : styles.right,
        ]}>
        <View style={styles.fab}>
          <Text style={styles.fabText}> {title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          position === 'bottom-left' ? styles.left : styles.right,
        ]}>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#57856e', false, 30)}>
          <View style={styles.fab}>
            <Text style={styles.fabText}> {title}</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return Platform.OS === 'ios' ? ios() : android();
};

// https://ethercreative.github.io/react-native-shadow-generator/
const styles = StyleSheet.create({
  fabLocation: {
    position: 'absolute',
    bottom: 25,
  },
  right: {
    right: 25,
  },
  left: {
    left: 25,
  },
  fab: {
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: '#6DA78A',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  fabText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
