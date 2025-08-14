import React from 'react';
import { View, ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface AnimalPickerProps {
  selectedAnimal: string;
  onAnimalSelect: (animal: string) => void;
}

const animals = [
  { id: 'dog', name: 'Dog', icon: '🐶' },
  { id: 'cat', name: 'Cat', icon: '🐈' },
  { id: 'bird', name: 'Bird', icon: '🦜' },
  { id: 'crow', name: 'Crow', icon: '🐦‍⬛' },
  { id: 'squirrel', name: 'Squirrel', icon: '🐿️' },
  { id: 'monkey', name: 'Monkey', icon: '🐵' },
  { id: 'fox', name: 'Fox', icon: '🦊' },
  { id: 'cow', name: 'Cow', icon: '🐄' },
  { id: 'horse', name: 'Horse', icon: '🐴' },
  { id: 'pig', name: 'Pig', icon: '🐷' },
  { id: 'sheep', name: 'Sheep', icon: '🐑' },
  { id: 'goat', name: 'Goat', icon: '🐐' },
  { id: 'chicken', name: 'Chicken', icon: '🐓' },
  { id: 'duck', name: 'Duck', icon: '🦆' },
  { id: 'elephant', name: 'Elephant', icon: '🐘' },
  { id: 'lion', name: 'Lion', icon: '🦁' },
  { id: 'tiger', name: 'Tiger', icon: '🐅' },
  { id: 'bear', name: 'Bear', icon: '🐻' },
  { id: 'wolf', name: 'Wolf', icon: '🐺' },
  { id: 'frog', name: 'Frog', icon: '🐸' }
];

export default function AnimalPicker({ selectedAnimal, onAnimalSelect }: AnimalPickerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Animal Type:</Text>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {animals.map((animal) => (
          <TouchableOpacity
            key={animal.id}
            style={[
              styles.animalButton,
              selectedAnimal === animal.id && styles.selectedButton
            ]}
            onPress={() => onAnimalSelect(animal.id)}
          >
            <Text style={styles.animalIcon}>{animal.icon}</Text>
            <Text style={[
              styles.animalName,
              selectedAnimal === animal.id && styles.selectedText
            ]}>
              {animal.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 2
  },
  scrollView: {
    flexGrow: 0,
  },
  scrollContent: {
    paddingHorizontal: 5,
  },
  animalButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 15,
    marginHorizontal: 5,
    paddingVertical: 12,
    paddingHorizontal: 8,
    minWidth: 70,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedButton: {
    backgroundColor: 'rgba(255, 215, 0, 0.3)',
    borderColor: '#FFD700',
  },
  animalIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  animalName: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '500',
    textAlign: 'center',
  },
  selectedText: {
    color: '#FFD700',
    fontWeight: '700',
  },
});