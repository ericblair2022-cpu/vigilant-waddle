import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5A6B73', // Changed from white to darker blue-grey slate
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 2,
    borderColor: 'rgba(76, 175, 80, 0.3)',
  },

  // Detection Header Styles
  detectionHeader: {
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  detectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E2E8F0',
    marginBottom: 10,
    textAlign: 'center',
  },
  animalInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  animalEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  animalName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F7FAFC',
  },
  recordingId: {
    fontSize: 12,
    color: '#CBD5E0',
    fontStyle: 'italic',
    marginTop: 5,
  },

  // Saying Section Styles - Dark blue-grey slate
  sayingSection: {
    backgroundColor: '#4A5568',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'rgba(74, 85, 104, 0.8)',
    position: 'relative',
    overflow: 'hidden',
  },
  sayingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E2E8F0',
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  sayingText: {
    fontSize: 16,
    color: '#F7FAFC',
    fontStyle: 'italic',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 8,
    fontWeight: '600',
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  expressionText: {
    fontSize: 14,
    color: '#CBD5E0',
    textAlign: 'center',
    fontWeight: '500',
    opacity: 0.95,
  },

  // Sound Section Styles - Dark blue-grey slate
  soundSection: {
    backgroundColor: '#4A5568',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'rgba(74, 85, 104, 0.8)',
    position: 'relative',
    overflow: 'hidden',
  },
  soundHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'center',
  },
  emotionEmoji: {
    fontSize: 24,
    marginRight: 8,
  },
  soundName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E2E8F0',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  meaning: {
    fontSize: 15,
    color: '#F7FAFC',
    textAlign: 'center',
    lineHeight: 20,
    fontWeight: '500',
  },

  // Emotion & Confidence Section - Dark blue-grey slate
  emotionConfidenceSection: {
    backgroundColor: '#4A5568',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: 'rgba(74, 85, 104, 0.8)',
  },
  emotionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  emotionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  emotionValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
    textTransform: 'capitalize',
  },
  confidenceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  confidenceLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  confidenceValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  confidenceBar: {
    flex: 1,
    height: 8,
    backgroundColor: 'rgba(76, 175, 80, 0.2)',
    borderRadius: 4,
    marginLeft: 10,
    overflow: 'hidden',
  },
  confidenceFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },

  // AI Research Section - Dark blue-grey slate
  aiSection: {
    backgroundColor: '#4A5568',
    borderRadius: 15,
    padding: 15,
    borderWidth: 2,
    borderColor: 'rgba(74, 85, 104, 0.8)',
  },
  aiTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E2E8F0',
    marginBottom: 8,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  tarzanaGreen: {
    color: '#90ee90',
  },
  aiAccuracy: {
    fontSize: 13,
    color: '#CBD5E0',
    marginBottom: 4,
    fontWeight: '500',
  },
  aiDataPoints: {
    fontSize: 13,
    color: '#CBD5E0',
    marginBottom: 4,
    fontWeight: '500',
  },
  aiVerified: {
    fontSize: 13,
    color: '#F7FAFC',
    fontWeight: 'bold',
    marginBottom: 4,
  },
  studySource: {
    fontSize: 12,
    color: '#E2E8F0',
    fontStyle: 'italic',
    marginTop: 4,
  },

  // No Sound Detection Styles
  noSoundHeader: {
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  noSoundTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E2E8F0',
    marginBottom: 10,
    textAlign: 'center',
  },
  noSoundInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  noSoundEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  noSoundText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#CBD5E0',
  },
  noSoundMessage: {
    fontSize: 14,
    color: '#F7FAFC',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 8,
  },

  // Non-Animal Detection Styles
  nonAnimalHeader: {
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  nonAnimalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F56565',
    marginBottom: 10,
    textAlign: 'center',
  },
  detectionInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  detectionEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
  detectionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#F56565',
  },
  nonAnimalMessage: {
    fontSize: 14,
    color: '#F7FAFC',
    textAlign: 'center',
    lineHeight: 20,
    marginTop: 8,
  },
});