// Comprehensive directory of "What They're Saying" sentences organized by animal and pattern
import { extendedSayingsDatabase, getExtendedSaying } from './extendedSayingsDatabase';

export const comprehensiveSayingsDatabase = {
  // CAT PATTERNS
  cat: {
    chatter: [
      "I don't want to be a product of my environment. I want my environment to be a product of me.",
      "Where are my offerings human?",
      "Heavy is the head that wears the crown",
      "The audacity of these humans never ceases to amaze me",
      "I'm not saying I'm royalty, but have you seen my posture?",
      "Excuse me, but did I ask for your opinion?",
      "I'm contemplating the mysteries of the universe... and my next meal"
    ],
    territorial: [
      "This is my home now",
      "This domain belongs to me and me alone",
      "I've claimed this territory and I'm not giving it up",
      "Every inch of this space is under my jurisdiction",
      "You're in my kingdom now, act accordingly"
    ],
    demanding: [
      "Where are my offerings human?",
      "My food bowl situation requires immediate attention",
      "I demand satisfaction and I demand it now",
      "Service around here has really declined lately",
      "I'm waiting... and my patience is wearing thin"
    ],
    pain: [
      "I'm in pain"
    ],
    distress: [
      "I'm pretty far from being ok",
      "I don't like this"
    ]
  },

  // DOG PATTERNS  
  dog: {
    friendly: [
      "The streets are always watching",
      "Do you know what they call a Quarter pounder in Amsterdam?",
      "You're the best human ever and I love you so much!",
      "Life is good when we're together like this",
      "Every day with you is an adventure waiting to happen"
    ],
    aggressive: [
      "You wanna go to war? We'll take you to war.",
      "You better back up",
      "I'm the guy in charge here",
      "You don't want to bump heads with me",
      "You want a piece of me?",
      "I dare you",
      "Don't mess with me"
    ],
    appeasing: [
      "I never rat on my friends",
      "I'm sorry, I'm sorry, please don't be mad",
      "I was just trying to help, I promise",
      "Can we be friends again? Please?",
      "I'll be the goodest boy if you forgive me"
    ],
    territorial: [
      "Money talks, but power whispers",
      "You talk but soon we gonna see",
      "I see them, they run haha",
      "This is my turf and everyone knows it",
      "I'm the guardian of this domain"
    ],
    chatter: [
      "I feel loved but treats always make things better",
      "Life is pretty amazing when you think about it",
      "So many smells, so little time to investigate them all",
      "Did someone say walkies? Because I heard walkies"
    ],
    pray: [
      "Food you guys, food!",
      "Please please please let there be treats",
      "I've been such a good boy, surely that deserves rewards",
      "The treat jar is calling my name"
    ],
    distress: [
      "I'm pretty far from being ok",
      "I don't like this",
      "What's going on?",
      "I'm far from being ok right now",
      "Let me over there",
      "Something's not right and I need help"
    ],
    frustrated: [
      "I don't like this",
      "What's going on?",
      "I'm far from being ok right now",
      "Let me over there",
      "This situation is not working for me at all"
    ],
    pain: [
      "I'm in pain"
    ]
  },

  // BIRD PATTERNS
  bird: {
    chatter: [
      "A man who doesn't stand for something will fall for anything",
      "Oy vey",
      "We will find the love",
      "Love is better than wine", 
      "You are so pretty and the tree is leafy",
      "You are a good friend",
      "I like this place",
      "So nice to see you",
      "This is a great spot",
      "Please, if I had a nickel for every time",
      "We out here drippin' in fitness",
      "I'm having such a good time",
      "What sally says about Susie tells more about Sally, Than Susie"
    ],
    cheerful: [
      "I'm the king of the world!",
      "I'm still standing better than I ever did feeling like a little kid!",
      "Praise this glorious day",
      "Today is absolutely magnificent and I'm here for it",
      "The world is my oyster and I'm ready to fly"
    ],
    singing_melodic: [
      "I'm free",
      "I'm in love", 
      "I feel it coming",
      "The sky is the limit",
      "The universe is amazing and I'm really grateful about it",
      "Singing my new song",
      "I'm back baby",
      "I'm in a good mood",
      "Believe me it's gonna be great",
      "So great to fly with you",
      "Fly with me and get some Honey",
      "I see friends!",
      "The world I love The trees I hug to be part of the wave can't stop",
      "Right on time",
      "Choose not the life of limitation", 
      "Screaming out my heart",
      "Calling out for my creator Show yourself I need you!",
      "It's the love of god",
      "It's time we all reach out for the new, that means you too",
      "Praises and gratitude for all your wonders",
      "Blessings!",
      "What goes around comes around",
      "Send me an angel! Right now!"
    ],
    mating: [
      "Looking for some hot stuff this evening",
      "I need you tonight",
      "Where are you my love",
      "Honey I'm still free take a chance on me",
      "All the single ladies lift your hands up",
      "Be my be my baby",
      "In time, I want to be your best friend East Side love is living on the West End",
      "I feel loved I am love",
      "Don't worry about a thing",
      "Tell me more tell me more",
      "I wanna love you and treat you right every day and every night",
      "I live a fast life",
      "I got a lot more hope",
      "Every person on earth is a solution to someone else's problems",
      "Never mind the darkness we still can find a way"
    ],
    territorial: [
      "This is my tree and we live by my rules",
      "Can't stop addicted to the shindig",
      "The road of life is rocky and you may stumble too so while your pointing fingers you are being judged too",
      "This airspace belongs to me and my family",
      "I've claimed this branch and I'm not moving"
    ],
    communicating_parents: [
      "Mommy",
      "Mom, I need you right now",
      "Where are you? I'm calling for you",
      "Please come help me with this situation"
    ],
    paternal: [
      "Come here",
      "Let's go there", 
      "Good morning, Beautiful day I'm awake and so will they",
      "Follow me, I'll show you the way",
      "Time to learn something important"
    ],
    flight: [
      "Come along if you feel like a room without a roof",
      "Let's soar together into the endless sky",
      "The wind is perfect for flying today",
      "Follow my lead, we're going on an adventure"
    ],
    pain: [
      "I'm in pain"
    ],
    distress: [
      "I'm pretty far from being ok",
      "I don't like this"
    ]
  },

  // CROW PATTERNS
  crow: {
    chatter: [
      "You can get much further with a kind word and a gun than you can with just a kind word",
      "Hey you don't have to explain the game to me",
      "I see everything that happens around here",
      "Nothing gets past my watchful eyes",
      "Intelligence is my greatest weapon"
    ],
    alerting: [
      "Watch out gang, there's movement on my block",
      "Attention everyone, we have a situation developing",
      "All units be advised, something's happening",
      "Code red, code red, everyone needs to know about this"
    ],
    pain: [
      "I'm in pain"
    ],
    distress: [
      "I'm pretty far from being ok",
      "I don't like this"
    ]
  }
};

// Function to get random saying for specific animal and pattern
export const getRandomSaying = (animal: string, pattern: string): string => {
  // First check main database
  const animalData = comprehensiveSayingsDatabase[animal.toLowerCase()];
  if (animalData) {
    const patternData = animalData[pattern.toLowerCase()];
    if (patternData && patternData.length > 0) {
      return patternData[Math.floor(Math.random() * patternData.length)];
    }
    // Fallback to any available pattern for this animal
    const availablePatterns = Object.values(animalData).flat();
    if (availablePatterns.length > 0) {
      return availablePatterns[Math.floor(Math.random() * availablePatterns.length)];
    }
  }
  
  // Try extended database
  const extendedSaying = getExtendedSaying(animal, pattern);
  if (extendedSaying !== "Something interesting is happening right now!" && 
      extendedSaying !== "Something important is happening in my world!") {
    return extendedSaying;
  }
  
  return "Something important is happening right now!";
};

// Function to get all sayings for an animal-pattern combination
export const getAllSayings = (animal: string, pattern: string): string[] => {
  const animalData = comprehensiveSayingsDatabase[animal.toLowerCase()];
  if (!animalData) return [];
  
  const patternData = animalData[pattern.toLowerCase()];
  return patternData || [];
};

// Function to ensure non-repetitive selection
let lastUsedSayings: { [key: string]: string } = {};

export const getNonRepetitiveSaying = (animal: string, pattern: string): string => {
  const key = `${animal.toLowerCase()}_${pattern.toLowerCase()}`;
  const availableSayings = getAllSayings(animal, pattern);
  
  if (availableSayings.length === 0) {
    return getRandomSaying(animal, pattern);
  }
  
  if (availableSayings.length === 1) {
    return availableSayings[0];
  }
  
  // Filter out the last used saying
  const filteredSayings = availableSayings.filter(saying => saying !== lastUsedSayings[key]);
  const selectedSaying = filteredSayings.length > 0 
    ? filteredSayings[Math.floor(Math.random() * filteredSayings.length)]
    : availableSayings[Math.floor(Math.random() * availableSayings.length)];
  
  lastUsedSayings[key] = selectedSaying;
  return selectedSaying;
};