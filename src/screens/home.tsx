import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAppSelector } from '../store/hooks';

const HomeScreen = () => {
    const token = useAppSelector(state => state.userSlice.token)

  return (
    <View style={styles.container}>
      <Text style={styles.tokenText}>Your Token:{token}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  tokenText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tokenValue: {
    fontSize: 16,
    color: '#333',
  },
});

export default HomeScreen;
