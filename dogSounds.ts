export interface DogSound {
  id: string;
  name: string;
  meaning: string;
  emotion: string;
  patterns: string[];
}

export const dogSoundsDatabase: DogSound[] = [
  {
    id: '1',
    name: 'Happy Bark',
    meaning: 'Your dog is excited and happy! They might want to play or are greeting someone they love.',
    emotion: 'Happy',
    patterns: ['short', 'high', 'repetitive']
  },
  {
    id: '2',
    name: 'Alert Bark',
    meaning: 'Your dog is alerting you to something. They might have spotted a stranger or heard an unusual sound.',
    emotion: 'Alert',
    patterns: ['sharp', 'continuous', 'medium']
  },
  {
    id: '3',
    name: 'Whine',
    meaning: 'Your dog might be anxious, need something, or want attention. Check if they need to go outside or are uncomfortable.',
    emotion: 'Anxious',
    patterns: ['high', 'prolonged', 'soft']
  },
  {
    id: '4',
    name: 'Howl',
    meaning: 'Your dog might be responding to sirens, music, or trying to communicate over long distances. This is normal behavior!',
    emotion: 'Communicative',
    patterns: ['long', 'melodic', 'sustained']
  },
  {
    id: '5',
    name: 'Playful Bark',
    meaning: 'Your dog wants to play! This is an invitation for fun and games. Time to get the toys out!',
    emotion: 'Playful',
    patterns: ['bouncy', 'varied', 'enthusiastic']
  },
  {
    id: '6',
    name: 'Demand Bark',
    meaning: 'Your dog wants something specific - food, water, or to go outside. They are being quite insistent!',
    emotion: 'Demanding',
    patterns: ['persistent', 'rhythmic', 'forceful']
  }
];

export function analyzeDogSound(): { sound: DogSound; confidence: number } {
  const randomSound = dogSoundsDatabase[Math.floor(Math.random() * dogSoundsDatabase.length)];
  const confidence = Math.floor(Math.random() * 30) + 70;
  
  return {
    sound: randomSound,
    confidence
  };
}