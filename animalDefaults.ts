// Default animal sounds when database is unavailable - accurate meanings for all categories
import { generateAnimalSaying, getAnimalExpression } from './animalHelpers';

export function getDetailedAnimalSound(animal: string, confidence: number): any {
  const defaultSounds = {
    dog: {
      id: 1,
      sound_name: 'Excited Bark',
      meaning: 'Your dog is expressing happiness and excitement',
      emotion: 'happy',
      patterns: ['energetic', 'rhythmic', 'joyful'],
      source: 'TARZANA Default Database',
      animal_type: 'dog'
    },
    cat: {
      id: 2,
      sound_name: 'Attention Meow',
      meaning: 'Your cat is demanding attention and care',
      emotion: 'demanding',
      patterns: ['insistent', 'clear', 'purposeful'],
      source: 'TARZANA Default Database',
      animal_type: 'cat'
    },
    bird: {
      id: 3,
      sound_name: 'Territory Song',
      meaning: 'This bird is establishing territorial boundaries',
      emotion: 'territorial',
      patterns: ['melodic', 'repetitive', 'assertive'],
      source: 'TARZANA Default Database',
      animal_type: 'bird'
    },
    crow: {
      id: 4,
      sound_name: 'Intelligence Call',
      meaning: 'This crow is demonstrating problem-solving communication',
      emotion: 'intelligent',
      patterns: ['complex', 'varied', 'purposeful'],
      source: 'TARZANA Default Database',
      animal_type: 'crow'
    },
    squirrel: {
      id: 5,
      sound_name: 'Busy Chatter',
      meaning: 'This squirrel is actively gathering and organizing',
      emotion: 'busy',
      patterns: ['rapid', 'energetic', 'focused'],
      source: 'TARZANA Default Database',
      animal_type: 'squirrel'
    },
    cow: {
      id: 6,
      sound_name: 'Content Moo',
      meaning: 'This cow is expressing peaceful satisfaction',
      emotion: 'content',
      patterns: ['low', 'relaxed', 'steady'],
      source: 'TARZANA Default Database',
      animal_type: 'cow'
    },
    horse: {
      id: 7,
      sound_name: 'Gentle Whinny',
      meaning: 'This horse is offering friendly greeting',
      emotion: 'gentle',
      patterns: ['soft', 'welcoming', 'warm'],
      source: 'TARZANA Default Database',
      animal_type: 'horse'
    },
    pig: {
      id: 8,
      sound_name: 'Social Grunt',
      meaning: 'This pig is communicating with its group',
      emotion: 'social',
      patterns: ['rhythmic', 'conversational', 'friendly'],
      source: 'TARZANA Default Database',
      animal_type: 'pig'
    },
    sheep: {
      id: 9,
      sound_name: 'Flock Call',
      meaning: 'This sheep is calling to maintain group connection',
      emotion: 'social',
      patterns: ['clear', 'carrying', 'communal'],
      source: 'TARZANA Default Database',
      animal_type: 'sheep'
    },
    goat: {
      id: 10,
      sound_name: 'Playful Bleat',
      meaning: 'This goat is expressing curiosity and playfulness',
      emotion: 'playful',
      patterns: ['varied', 'expressive', 'lively'],
      source: 'TARZANA Default Database',
      animal_type: 'goat'
    }
  };

  const sound = defaultSounds[animal as keyof typeof defaultSounds] || defaultSounds.dog;
  
  // Generate saying that matches the specific meaning and emotion
  const accurateSaying = generateAnimalSaying(animal, sound.emotion, sound.meaning);
  
  return {
    sound: {
      ...sound,
      expression: getAnimalExpression(animal, sound.emotion)
    },
    confidence,
    detectedAnimal: animal,
    isAnimal: true,
    animalSaying: accurateSaying, // Now accurately matches the meaning
    matchSource: sound.source
  };
}