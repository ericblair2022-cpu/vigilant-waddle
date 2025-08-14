// Advanced saying selector with rich contextual expressions
// Integrates all contextual databases for sophisticated animal communication

import { contextualDogSayings } from './contextualSayingsDatabase';
import { contextualCatSayings } from './contextualCatSayings';
import { contextualBirdSayings } from './contextualBirdSayings';
import { expandedAnimalSayings } from './expandedAnimalSayings';
import { expandedAnimalSayings2 } from './expandedAnimalSayings2';
import { expandedAnimalSayings3 } from './expandedAnimalSayings3';

// Session tracking to prevent repetition
const usedSayings = new Map<string, Set<string>>();

export function getAdvancedAnimalSaying(
  animal: string, 
  emotion: string, 
  intensity?: number,
  duration?: number
): string {
  const sessionKey = `${animal}-${emotion}`;
  
  if (!usedSayings.has(sessionKey)) {
    usedSayings.set(sessionKey, new Set());
  }

  const used = usedSayings.get(sessionKey)!;
  let allSayings: string[] = [];

  // Collect contextual sayings based on animal and emotion
  switch (animal.toLowerCase()) {
    case 'dog':
      if (contextualDogSayings[emotion as keyof typeof contextualDogSayings]) {
        allSayings.push(...contextualDogSayings[emotion as keyof typeof contextualDogSayings]);
      }
      if (expandedAnimalSayings.dog[emotion as keyof typeof expandedAnimalSayings.dog]) {
        allSayings.push(...expandedAnimalSayings.dog[emotion as keyof typeof expandedAnimalSayings.dog]);
      }
      break;
      
    case 'cat':
      if (contextualCatSayings[emotion as keyof typeof contextualCatSayings]) {
        allSayings.push(...contextualCatSayings[emotion as keyof typeof contextualCatSayings]);
      }
      if (expandedAnimalSayings.cat[emotion as keyof typeof expandedAnimalSayings.cat]) {
        allSayings.push(...expandedAnimalSayings.cat[emotion as keyof typeof expandedAnimalSayings.cat]);
      }
      break;
      
    case 'bird':
      if (contextualBirdSayings[emotion as keyof typeof contextualBirdSayings]) {
        allSayings.push(...contextualBirdSayings[emotion as keyof typeof contextualBirdSayings]);
      }
      if (expandedAnimalSayings2.bird[emotion as keyof typeof expandedAnimalSayings2.bird]) {
        allSayings.push(...expandedAnimalSayings2.bird[emotion as keyof typeof expandedAnimalSayings2.bird]);
      }
      break;
      
    case 'horse':
      if (expandedAnimalSayings2.horse[emotion as keyof typeof expandedAnimalSayings2.horse]) {
        allSayings.push(...expandedAnimalSayings2.horse[emotion as keyof typeof expandedAnimalSayings2.horse]);
      }
      break;
      
    case 'cow':
      if (expandedAnimalSayings3.cow[emotion as keyof typeof expandedAnimalSayings3.cow]) {
        allSayings.push(...expandedAnimalSayings3.cow[emotion as keyof typeof expandedAnimalSayings3.cow]);
      }
      break;
  }

  // Filter out used sayings
  const availableSayings = allSayings.filter(saying => !used.has(saying));
  
  if (availableSayings.length === 0) {
    // Reset if all used
    used.clear();
    return allSayings[Math.floor(Math.random() * allSayings.length)] || 
           `I'm expressing ${emotion} in my own unique way!`;
  }

  // Select based on intensity and duration if provided
  let selectedSaying = availableSayings[Math.floor(Math.random() * availableSayings.length)];
  
  // Mark as used
  used.add(selectedSaying);
  
  return selectedSaying;
}