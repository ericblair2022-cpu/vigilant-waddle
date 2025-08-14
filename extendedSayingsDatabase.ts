// Extended sayings for animals not covered in the main database
export const extendedSayingsDatabase = {
  // BEAR PATTERNS
  bear: {
    spring_awakening: [
      "I'm back baby",
      "Time to reclaim my territory after the long sleep",
      "The world better be ready because I'm awake and hungry",
      "Spring means it's time to show everyone who runs this forest"
    ],
    territorial: [
      "This is bear country and everyone needs to respect that",
      "I'm the apex predator here and don't you forget it",
      "My domain extends as far as my roar can reach"
    ],
    foraging: [
      "Food, glorious food! Time to stock up for winter",
      "The salmon are running and I'm ready for the feast",
      "Berry season is here and I'm claiming the best patches"
    ]
  },

  // RABBIT PATTERNS
  rabbit: {
    alert: [
      "Danger! Everyone scatter and find cover immediately!",
      "Something's not right - time to disappear into the bushes",
      "My ears are picking up trouble - everyone be ready to run"
    ],
    territorial: [
      "This burrow is mine and I've worked hard to make it perfect",
      "These are my favorite grazing spots and I'm not sharing"
    ],
    mating: [
      "Spring is in the air and love is everywhere",
      "Looking for that special someone to share my burrow with"
    ]
  },

  // HORSE PATTERNS
  horse: {
    greeting: [
      "Welcome to my pasture, friend",
      "It's a beautiful day to run free in the fields",
      "The wind is calling and I must answer"
    ],
    territorial: [
      "This herd follows my lead and we stick together",
      "I'm the guardian of this meadow and all who graze here"
    ],
    alert: [
      "Something's approaching - everyone stay close to me",
      "I sense danger on the horizon - be ready to run"
    ]
  },

  // SHEEP PATTERNS
  sheep: {
    flock_communication: [
      "Stay together everyone, safety in numbers",
      "The grass is greener over here, follow me",
      "Where one goes, we all go - that's the sheep way"
    ],
    alert: [
      "Wolf! Wolf! Everyone run for the hills!",
      "Predator alert - form up and protect the young ones"
    ],
    content: [
      "Life is good when you're surrounded by family",
      "Nothing beats a peaceful day of grazing with friends"
    ]
  },

  // COW PATTERNS
  cow: {
    social: [
      "Moo-rning everyone! It's a beautiful day in the pasture",
      "The grass is particularly tasty today, don't you think?",
      "Nothing beats hanging out with the herd on a sunny day"
    ],
    maternal: [
      "Come here little one, stay close to mama",
      "I'll protect you from anything that threatens our family"
    ],
    content: [
      "Life is udderly perfect when you're chewing cud in the sunshine",
      "Simple pleasures make for the happiest days"
    ]
  },

  // WOLF PATTERNS
  wolf: {
    pack_communication: [
      "The pack that hunts together, survives together",
      "I'm calling the family home for tonight's feast",
      "Territory secured - all pack members report in"
    ],
    territorial: [
      "This land belongs to my pack and we'll defend it fiercely",
      "Intruders beware - you're in wolf territory now"
    ],
    hunting: [
      "The hunt begins now - everyone know your role",
      "Prey spotted - time to show our coordination and skill"
    ]
  },

  // ELEPHANT PATTERNS
  elephant: {
    matriarchal: [
      "Follow my lead - I know where the water is",
      "The wisdom of generations flows through me",
      "Protect the young ones - they are our future"
    ],
    mourning: [
      "We remember those who came before us",
      "The circle of life continues, but we honor the fallen"
    ],
    celebration: [
      "New life brings joy to the entire herd",
      "Today we celebrate the bonds that make us family"
    ]
  },

  // MONKEY PATTERNS
  monkey: {
    playful: [
      "Life's too short not to swing from every branch!",
      "Who wants to play follow the leader through the treetops?",
      "The jungle is our playground and we're having a blast!"
    ],
    social: [
      "Grooming time! Who needs their back scratched?",
      "The fruit is ripe and ready - let's have a feast!"
    ],
    territorial: [
      "These trees belong to our troop - find your own canopy!",
      "We've claimed the best fruit trees and we're keeping them"
    ]
  }
};

// Function to get sayings from extended database
export const getExtendedSaying = (animal: string, pattern: string): string => {
  const animalData = extendedSayingsDatabase[animal.toLowerCase()];
  if (!animalData) return "Something interesting is happening right now!";
  
  const patternData = animalData[pattern.toLowerCase()];
  if (!patternData || patternData.length === 0) {
    // Fallback to any available pattern for this animal
    const availablePatterns = Object.values(animalData).flat();
    if (availablePatterns.length > 0) {
      return availablePatterns[Math.floor(Math.random() * availablePatterns.length)];
    }
    return "Something important is happening in my world!";
  }
  
  return patternData[Math.floor(Math.random() * patternData.length)];
};