// Enhanced helper functions for animal sound analysis with accurate database matching
import { dogSayings, catSayings, birdSayings, crowSayings, squirrelSayings, cowSayings, horseSayings } from './animalSayings';

export function getNonAnimalResult(detectedType: string, confidence: number): any {
  const nonAnimalMessages = {
    human_voice: 'Human speech detected - no animal communication found',
    background_noise: 'Background environmental noise - no animal sounds detected',
    mechanical_sound: 'Mechanical or artificial sound detected',
    wind: 'Natural wind sounds - no animal vocalizations present',
    traffic: 'Traffic or urban noise detected'
  };
  
  return {
    sound: {
      id: 0,
      sound_name: 'Non-Animal Sound',
      meaning: nonAnimalMessages[detectedType as keyof typeof nonAnimalMessages] || 'No animal detected',
      emotion: 'neutral',
      patterns: [],
      source: 'TARZANA Detection System',
      animal_type: 'none'
    },
    confidence,
    detectedAnimal: detectedType,
    isAnimal: false
  };
}

export function getAnimalExpression(animal: string, emotion: string): string {
  const expressions = {
    dog: {
      happy: '😊 *tail wagging*',
      alert: '👀 *ears perked up*',
      protective: '🛡️ *standing guard*',
      playful: '🎾 *bouncing excitedly*',
      demanding: '😤 *pawing at you*'
    },
    cat: {
      demanding: '😾 *staring intensely*',
      content: '😌 *slow blinking*',
      alert: '👂 *ears forward*',
      playful: '🐾 *crouched and ready*',
      affectionate: '💕 *purring softly*'
    },
    bird: {
      territorial: '🏠 *puffed chest*',
      confident: '💪 *head held high*',
      alert: '👁️ *scanning surroundings*',
      communicative: '🎵 *melodic posture*',
      happy: '😊 *feathers ruffled happily*'
    },
    crow: {
      intelligent: '🧠 *head tilted thoughtfully*',
      warning: '⚠️ *wings spread wide*',
      social: '🗣️ *calling loudly*'
    },
    squirrel: {
      busy: '🏃 *tail twitching rapidly*',
      alert: '👁️ *frozen and listening*',
      gathering: '🥜 *cheeks stuffed full*'
    },
    cow: {
      content: '😌 *chewing peacefully*',
      social: '👥 *looking toward herd*',
      calling: '📢 *head raised high*'
    },
    horse: {
      spirited: '🔥 *mane flowing*',
      gentle: '💝 *nuzzling softly*',
      alert: '👂 *ears rotating*'
    }
  };
  
  const animalExpressions = expressions[animal as keyof typeof expressions];
  if (animalExpressions) {
    const emotionKey = Object.keys(animalExpressions).find(key => emotion.includes(key));
    if (emotionKey) {
      return animalExpressions[emotionKey as keyof typeof animalExpressions];
    }
  }
  
  return '🐾 *expressing naturally*';
}

// Generate accurate sayings based on database match and selected animal
export function generateAnimalSaying(animal: string, emotion: string, databaseMeaning?: string): string {
  let sayings: string[] = [];
  
  // Map database meanings to appropriate saying categories
  const emotionMapping = {
    dog: { alert: 'alert', happy: 'happy', protective: 'protective', excited: 'happy', warning: 'alert' },
    cat: { demanding: 'demanding', content: 'content', hungry: 'demanding', comfortable: 'content' },
    bird: { territorial: 'territorial', communication: 'communicative', singing: 'communicative' },
    crow: { intelligent: 'intelligent', warning: 'warning', social: 'intelligent' },
    squirrel: { busy: 'busy', alert: 'alert', gathering: 'busy' },
    cow: { content: 'content', social: 'social', calling: 'social' },
    horse: { spirited: 'spirited', gentle: 'gentle', excited: 'spirited' }
  };
  
  // Get appropriate saying category based on database meaning or emotion
  let sayingCategory = emotion;
  if (databaseMeaning) {
    const mapping = emotionMapping[animal as keyof typeof emotionMapping];
    if (mapping) {
      const foundKey = Object.keys(mapping).find(key => 
        databaseMeaning.toLowerCase().includes(key) || emotion.toLowerCase().includes(key)
      );
      if (foundKey) {
        sayingCategory = mapping[foundKey as keyof typeof mapping];
      }
    }
  }
  
  // Get sayings from the comprehensive database
  switch (animal) {
    case 'dog':
      const dogKey = Object.keys(dogSayings).find(key => sayingCategory.includes(key));
      sayings = dogKey ? dogSayings[dogKey as keyof typeof dogSayings] : dogSayings.happy;
      break;
    case 'cat':
      const catKey = Object.keys(catSayings).find(key => sayingCategory.includes(key));
      sayings = catKey ? catSayings[catKey as keyof typeof catSayings] : catSayings.demanding;
      break;
    case 'bird':
      const birdKey = Object.keys(birdSayings).find(key => sayingCategory.includes(key));
      sayings = birdKey ? birdSayings[birdKey as keyof typeof birdSayings] : birdSayings.territorial;
      break;
    case 'crow':
      const crowKey = Object.keys(crowSayings).find(key => sayingCategory.includes(key));
      sayings = crowKey ? crowSayings[crowKey as keyof typeof crowSayings] : crowSayings.intelligent;
      break;
    case 'squirrel':
      const squirrelKey = Object.keys(squirrelSayings).find(key => sayingCategory.includes(key));
      sayings = squirrelKey ? squirrelSayings[squirrelKey as keyof typeof squirrelSayings] : squirrelSayings.busy;
      break;
    case 'cow':
      const cowKey = Object.keys(cowSayings).find(key => sayingCategory.includes(key));
      sayings = cowKey ? cowSayings[cowKey as keyof typeof cowSayings] : cowSayings.content;
      break;
    case 'horse':
      const horseKey = Object.keys(horseSayings).find(key => sayingCategory.includes(key));
      sayings = horseKey ? horseSayings[horseKey as keyof typeof horseSayings] : horseSayings.gentle;
      break;
  }
  
  // Return random saying from the appropriate category
  if (sayings.length > 0) {
    return sayings[Math.floor(Math.random() * sayings.length)];
  }
  
  return '"I\'m just expressing myself in my own special way!"';
}