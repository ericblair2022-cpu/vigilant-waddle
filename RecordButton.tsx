import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WaveAnimation from './WaveAnimation';

interface RecordButtonProps {
  isRecording: boolean;
  onPress: () => void;
}

export default function RecordButton({ isRecording, onPress }: RecordButtonProps) {
  return (
    <View style={styles.container}>
      <WaveAnimation isActive={isRecording} />
      <TouchableOpacity
        style={[
          styles.button,
          isRecording ? styles.recording : styles.idle
        ]}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <Ionicons
          name={isRecording ? 'stop' : 'mic'}
          size={40}
          color="white"
        />
        <Text style={styles.buttonText}>
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 200,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    zIndex: 1,
  },
  idle: {
    backgroundColor: '#FF6B6B',
  },
  recording: {
    backgroundColor: '#4ECDC4',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
});