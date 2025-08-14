// Comprehensive animal sayings database with accurate category-specific meanings
// Updated to use expanded sayings with 100 phrases per category
import { 
  dogHappyExpanded, 
  dogAlertExpanded, 
  catDemandingExpanded, 
  catContentExpanded 
} from './expandedAnimalSayings';
import { 
  birdTerritorialExpanded, 
  birdCommunicativeExpanded, 
  crowIntelligentExpanded, 
  crowWarningExpanded 
} from './expandedAnimalSayings2';
import { 
  squirrelBusyExpanded, 
  squirrelAlertExpanded, 
  cowContentExpanded, 
  cowSocialExpanded, 
  horseSpiritedExpanded, 
  horseGentleExpanded 
} from './expandedAnimalSayings3';

// Dog protective sayings from existing file
import { dogProtectiveSayings } from './dogSayingsExpanded';

export const dogSayings = {
  happy: dogHappyExpanded.map(saying => `"${saying}"`),
  alert: dogAlertExpanded.map(saying => `"${saying}"`),
  protective: dogProtectiveSayings.map(saying => `"${saying}"`)
};

export const catSayings = {
  demanding: catDemandingExpanded.map(saying => `"${saying}"`),
  content: catContentExpanded.map(saying => `"${saying}"`)
};

export const birdSayings = {
  territorial: birdTerritorialExpanded.map(saying => `"${saying}"`),
  communicative: birdCommunicativeExpanded.map(saying => `"${saying}"`)
};

export const crowSayings = {
  intelligent: crowIntelligentExpanded.map(saying => `"${saying}"`),
  warning: crowWarningExpanded.map(saying => `"${saying}"`)
};

export const squirrelSayings = {
  busy: squirrelBusyExpanded.map(saying => `"${saying}"`),
  alert: squirrelAlertExpanded.map(saying => `"${saying}"`)
};

export const cowSayings = {
  content: cowContentExpanded.map(saying => `"${saying}"`),
  social: cowSocialExpanded.map(saying => `"${saying}"`)
};

export const horseSayings = {
  spirited: horseSpiritedExpanded.map(saying => `"${saying}"`),
  gentle: horseGentleExpanded.map(saying => `"${saying}"`)
};
