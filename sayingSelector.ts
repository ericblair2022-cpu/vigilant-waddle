// Non-repetitive saying selection system with database correlation
import { dogSayings, catSayings, birdSayings, crowSayings, squirrelSayings, cowSayings, horseSayings } from './animalSayings';
import { matchEmotionToExpression } from './emotionMatching';

// Track recently used sayings to prevent repetition
const recentSayings = new Map<string, Set<string>>();
const MAX_RECENT_SAYINGS = 20;

// Get all sayings for an animal category
function getAllSayingsForAnimal(animal: string): { [key: string]: string[] } {
  const sayingsMap: { [key: string]: { [key: string]: string[] } } = {
    dog: dogSayings,
    cat: catSayings,
    bird: birdSayings,
    crow: crowSayings,
    squirrel: squirrelSayings,
    cow: cowSayings,
    horse: horseSayings
  };
  
  return sayingsMap[animal] || dogSayings;
}

// Select emotion-matched saying without repetition
export function selectNonRepetitiveSaying(
  animal: string, 
  emotion: string, 
  recordingData: any
): { saying: string; expression: string; matchedEmotion: string } {
  const animalSayings = getAllSayingsForAnimal(animal);
  const sessionKey = `${animal}_${Date.now().toString().slice(-6)}`;
  
  // Initialize recent sayings tracker
  if (!recentSayings.has(sessionKey)) {
    recentSayings.set(sessionKey, new Set());
  }
  
  const recentSet = recentSayings.get(sessionKey)!;
  
  // Find emotion category that matches database emotion
  let emotionCategory = 'happy';
  const emotionLower = emotion.toLowerCase();
  
  // Map database emotions to saying categories
  if (emotionLower.includes('alert') || emotionLower.includes('watch')) {
    emotionCategory = 'alert';
  } else if (emotionLower.includes('demand') || emotionLower.includes('want')) {
    emotionCategory = 'demanding';
  } else if (emotionLower.includes('content') || emotionLower.includes('satisfied')) {
    emotionCategory = 'content';
  } else if (emotionLower.includes('territorial') || emotionLower.includes('territory')) {
    emotionCategory = 'territorial';
  } else if (emotionLower.includes('social') || emotionLower.includes('communicative')) {
    emotionCategory = 'communicative';
  } else if (emotionLower.includes('protective') || emotionLower.includes('guard')) {
    emotionCategory = 'protective';
  }
  
  // Get sayings for the matched emotion category
  const categorySayings = animalSayings[emotionCategory] || animalSayings[Object.keys(animalSayings)[0]];
  
  // Filter out recently used sayings
  const availableSayings = categorySayings.filter(saying => !recentSet.has(saying));
  
  // If all sayings have been used, clear the recent set and use all
  const sayingsToUse = availableSayings.length > 0 ? availableSayings : categorySayings;
  
  // Select random saying from available options
  const selectedSaying = sayingsToUse[Math.floor(Math.random() * sayingsToUse.length)];
  
  // Add to recent sayings and maintain max size
  recentSet.add(selectedSaying);
  if (recentSet.size > MAX_RECENT_SAYINGS) {
    const firstItem = recentSet.values().next().value;
    recentSet.delete(firstItem);
  }
  
  // Get emotion-matched expression
  const { matchedEmotion, expression } = matchEmotionToExpression(animal, emotion, selectedSaying);
  
  return {
    saying: selectedSaying,
    expression,
    matchedEmotion
  };
}

// Clear recent sayings for testing or reset
export function clearRecentSayings(): void {
  recentSayings.clear();
}