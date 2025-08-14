// Enhanced emotion-expression matching system for accurate category alignment

export interface EmotionMapping {
  emotion: string;
  expressions: string[];
  sayingKeywords: string[];
  confidence: number;
}

// Precise emotion mappings for each animal category
export const emotionMappings: { [key: string]: { [key: string]: EmotionMapping } } = {
  dog: {
    happy: {
      emotion: 'Happy & Playful',
      expressions: ['Joyful excitement', 'Pure bliss', 'Tail-wagging happiness', 'Playful energy'],
      sayingKeywords: ['best day', 'amazing', 'love', 'play', 'excited', 'joy', 'perfect', 'wonderful'],
      confidence: 0.95
    },
    alert: {
      emotion: 'Alert & Watchful',
      expressions: ['Vigilant awareness', 'Protective instinct', 'Focused attention', 'Ready to respond'],
      sayingKeywords: ['watch', 'alert', 'notice', 'attention', 'guard', 'aware', 'ready', 'focused'],
      confidence: 0.92
    },
    protective: {
      emotion: 'Protective & Defensive',
      expressions: ['Guardian mode', 'Territory defense', 'Pack protection', 'Warning stance'],
      sayingKeywords: ['protect', 'guard', 'defend', 'territory', 'warning', 'stay back', 'mine', 'safe'],
      confidence: 0.94
    }
  },
  cat: {
    demanding: {
      emotion: 'Demanding & Assertive',
      expressions: ['Urgent request', 'Commanding presence', 'Insistent communication', 'Authoritative tone'],
      sayingKeywords: ['now', 'want', 'need', 'demand', 'attention', 'serve', 'immediately', 'expect'],
      confidence: 0.91
    },
    content: {
      emotion: 'Content & Satisfied',
      expressions: ['Peaceful satisfaction', 'Comfortable relaxation', 'Gentle appreciation', 'Serene happiness'],
      sayingKeywords: ['perfect', 'comfortable', 'satisfied', 'peaceful', 'content', 'appreciate', 'lovely', 'serene'],
      confidence: 0.93
    }
  },
  bird: {
    territorial: {
      emotion: 'Territorial & Assertive',
      expressions: ['Territory establishment', 'Boundary marking', 'Dominance display', 'Space claiming'],
      sayingKeywords: ['territory', 'mine', 'boundary', 'space', 'claim', 'establish', 'domain', 'area'],
      confidence: 0.96
    },
    communicative: {
      emotion: 'Social & Communicative',
      expressions: ['Social bonding', 'Community connection', 'Melodic communication', 'Flock interaction'],
      sayingKeywords: ['together', 'community', 'social', 'connect', 'communicate', 'share', 'bond', 'flock'],
      confidence: 0.94
    }
  }
};

// Match emotion to appropriate expression and saying
export function matchEmotionToExpression(animal: string, emotion: string, saying: string): {
  matchedEmotion: string;
  expression: string;
  confidence: number;
} {
  const animalMappings = emotionMappings[animal];
  if (!animalMappings) {
    return {
      matchedEmotion: emotion,
      expression: 'Natural behavioral expression',
      confidence: 0.85
    };
  }

  // Find best emotion match
  let bestMatch = null;
  let highestScore = 0;

  for (const [emotionKey, mapping] of Object.entries(animalMappings)) {
    let score = 0;
    
    // Check if emotion contains key terms
    if (emotion.toLowerCase().includes(emotionKey)) {
      score += 0.5;
    }
    
    // Check saying content for matching keywords
    const sayingLower = saying.toLowerCase();
    for (const keyword of mapping.sayingKeywords) {
      if (sayingLower.includes(keyword)) {
        score += 0.1;
      }
    }
    
    if (score > highestScore) {
      highestScore = score;
      bestMatch = mapping;
    }
  }

  if (bestMatch) {
    const randomExpression = bestMatch.expressions[Math.floor(Math.random() * bestMatch.expressions.length)];
    return {
      matchedEmotion: bestMatch.emotion,
      expression: randomExpression,
      confidence: bestMatch.confidence
    };
  }

  // Fallback
  return {
    matchedEmotion: emotion,
    expression: 'Authentic behavioral expression',
    confidence: 0.87
  };
}