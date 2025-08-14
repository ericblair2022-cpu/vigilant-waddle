import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

interface WaveAnimationProps {
  isActive: boolean;
}

export default function WaveAnimation({ isActive }: WaveAnimationProps) {
  const wave1 = useRef(new Animated.Value(0)).current;
  const wave2 = useRef(new Animated.Value(0)).current;
  const wave3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isActive) {
      const createWaveAnimation = (animatedValue: Animated.Value, delay: number) => {
        return Animated.loop(
          Animated.sequence([
            Animated.timing(animatedValue, {
              toValue: 1,
              duration: 1000,
              delay,
              useNativeDriver: true,
            }),
            Animated.timing(animatedValue, {
              toValue: 0,
              duration: 1000,
              useNativeDriver: true,
            }),
          ])
        );
      };

      const animations = [
        createWaveAnimation(wave1, 0),
        createWaveAnimation(wave2, 200),
        createWaveAnimation(wave3, 400),
      ];

      Animated.parallel(animations).start();
    } else {
      wave1.setValue(0);
      wave2.setValue(0);
      wave3.setValue(0);
    }
  }, [isActive]);

  const getWaveStyle = (animatedValue: Animated.Value, size: number) => ({
    transform: [{
      scale: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, size],
      }),
    }],
    opacity: animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0.8, 0],
    }),
  });

  if (!isActive) return null;

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.wave, getWaveStyle(wave1, 1.5)]} />
      <Animated.View style={[styles.wave, getWaveStyle(wave2, 2)]} />
      <Animated.View style={[styles.wave, getWaveStyle(wave3, 2.5)]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: 200,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wave: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.3)',
  },
});