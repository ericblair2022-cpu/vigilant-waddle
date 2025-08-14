import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function JungleBackground({ children }: { children: React.ReactNode }) {
  return (
    <View style={styles.container}>
      <View style={styles.gradient}>
        <View style={styles.leafPattern1} />
        <View style={styles.leafPattern2} />
        <View style={styles.leafPattern3} />
        <View style={styles.vinePattern1} />
        <View style={styles.vinePattern2} />
        {children}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    backgroundColor: '#2d5a2d',
    position: 'relative',
  },
  leafPattern1: {
    position: 'absolute',
    top: 50,
    left: 20,
    width: 80,
    height: 80,
    backgroundColor: 'rgba(34, 139, 34, 0.3)',
    borderRadius: 40,
    transform: [{ rotate: '45deg' }],
  },
  leafPattern2: {
    position: 'absolute',
    top: 200,
    right: 30,
    width: 60,
    height: 60,
    backgroundColor: 'rgba(50, 205, 50, 0.2)',
    borderRadius: 30,
    transform: [{ rotate: '-30deg' }],
  },
  leafPattern3: {
    position: 'absolute',
    bottom: 150,
    left: 40,
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0, 100, 0, 0.2)',
    borderRadius: 50,
    transform: [{ rotate: '60deg' }],
  },
  vinePattern1: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 10,
    height: '100%',
    backgroundColor: 'rgba(34, 139, 34, 0.15)',
  },
  vinePattern2: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: '100%',
    backgroundColor: 'rgba(0, 100, 0, 0.1)',
  },
});