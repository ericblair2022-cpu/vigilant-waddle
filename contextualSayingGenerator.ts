// Advanced contextual saying generator based on animal behavior research
// Generates meaningful interpretations based on emotion, meaning, and context

interface AnimalContext {
  emotion: string;
  meaning: string;
  animal: string;
  intensity?: number;
  duration?: number;
}

interface SayingTemplate {
  patterns: string[];
  contexts: string[];
  emotions: string[];
}

// Research-based saying templates for different contexts
const sayingTemplates: { [key: string]: SayingTemplate } = {
  dog_protective: {
    patterns: [
      "I sense something unusual and I'm positioning myself to keep you safe!",
      "My instincts are telling me to be your guardian right now!",
      "I'm activating my protective protocols because I care about your wellbeing!",
      "Something doesn't feel right, so I'm stepping into my role as your protector!",
      "My loyalty compels me to investigate this potential threat!"
    ],
    contexts: ['territory', 'stranger', 'unusual', 'guard'],
    emotions: ['alert', 'protective', 'vigilant', 'defensive']
  },
  dog_happy: {
    patterns: [
      "This moment is absolutely perfect and I want to celebrate it with you!",
      "My heart is overflowing with pure joy and I can't contain my excitement!",
      "Life feels magical when we're together like this!",
      "I'm experiencing the most wonderful feeling of contentment and love!",
      "Every cell in my body is dancing with happiness right now!"
    ],
    contexts: ['play', 'together', 'love', 'excitement'],
    emotions: ['happy', 'joyful', 'excited', 'content']
  },
  cat_demanding: {
    patterns: [
      "I require your immediate attention for something very important to me!",
      "My needs are quite specific right now and I expect you to understand!",
      "I'm communicating my desires with the expectation of prompt service!",
      "This is my polite but firm request for what I need right now!",
      "I'm expressing my requirements with the confidence that you'll comply!"
    ],
    contexts: ['food', 'attention', 'service', 'need'],
    emotions: ['demanding', 'assertive', 'expectant']
  },
  bird_territorial: {
    patterns: [
      "I'm announcing my presence and establishing my rightful claim to this space!",
      "This territory belongs to me and I'm communicating that boundary clearly!",
      "I'm asserting my ownership of this area with confidence and authority!",
      "My vocal declaration serves as both warning and territorial marker!",
      "I'm establishing dominance over this space through vocal communication!"
    ],
    contexts: ['territory', 'boundary', 'claim', 'space'],
    emotions: ['territorial', 'assertive', 'dominant']
  }
};

// Generate contextual saying based on detected parameters
export function generateContextualSaying(context: AnimalContext): string {
  const { animal, emotion, meaning } = context;
  
  // Find matching template
  const templateKey = `${animal}_${emotion.toLowerCase()}`;
  let template = sayingTemplates[templateKey];
  
  // Fallback to generic animal templates
  if (!template) {
    const genericKey = Object.keys(sayingTemplates).find(key => 
      key.startsWith(animal) && 
      sayingTemplates[key].emotions.some(e => emotion.toLowerCase().includes(e))
    );
    template = genericKey ? sayingTemplates[genericKey] : null;
  }
  
  if (template) {
    // Select pattern based on meaning context
    const relevantPatterns = template.patterns.filter(pattern => 
      template.contexts.some(ctx => 
        meaning.toLowerCase().includes(ctx) || 
        pattern.toLowerCase().includes(ctx)
      )
    );
    
    const patternsToUse = relevantPatterns.length > 0 ? relevantPatterns : template.patterns;
    return patternsToUse[Math.floor(Math.random() * patternsToUse.length)];
  }
  
  // Advanced fallback generation
  return generateAdvancedFallback(context);
}

// Generate sophisticated fallback sayings
function generateAdvancedFallback(context: AnimalContext): string {
  const { animal, emotion, meaning } = context;
  
  const emotionPhrases = {
    alert: "heightened awareness",
    happy: "pure joy",
    protective: "guardian instincts", 
    demanding: "specific needs",
    territorial: "space ownership",
    content: "deep satisfaction"
  };
  
  const animalTraits = {
    dog: "loyal companion",
    cat: "independent spirit", 
    bird: "free-spirited communicator",
    horse: "noble creature",
    cow: "gentle giant"
  };
  
  const phrase = emotionPhrases[emotion.toLowerCase() as keyof typeof emotionPhrases] || "complex emotions";
  const trait = animalTraits[animal.toLowerCase() as keyof typeof animalTraits] || "sentient being";
  
  return `As a ${trait}, I'm expressing my ${phrase} through this meaningful communication that reflects ${meaning.toLowerCase()}!`;
}