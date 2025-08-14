import React from 'react';
import { Image, StyleSheet } from 'react-native';

interface DogSilhouetteProps {
  width?: number;
  height?: number;
  color?: string;
}

export default function DogSilhouette({ 
  width = 36, 
  height = 36, 
  color = '#000000' 
}: DogSilhouetteProps) {
  return (
    <Image 
      source={{ uri: 'https://d64gsuwffb70l.cloudfront.net/6876b10ccfdb626f11fdae7c_1753470676593_e7c37242.jpeg' }}
      style={[
        styles.dogImage, 
        { 
          width, 
          height,
          tintColor: color
        }
      ]}
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  dogImage: {
    // Apply black silhouette effect
  },
});