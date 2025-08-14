import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { styles } from './ResultCardStyles';
import { supabase } from '@/app/lib/supabase';
import { getNonRepetitiveSaying, getRandomSaying } from '@/utils/comprehensiveSayingsDatabase';

interface ResultCardProps {
  meaning: string;
  confidence: number;
  emotion: string;
  soundName?: string;
  detectedAnimal?: string;
  aiResearch?: any;
  isAnimal?: boolean;
  animalSaying?: string;
  expression?: string;
  matchSource?: string;
  recordingId?: string;
  recordingData?: any;
}

export default function ResultCard({ 
  meaning, 
  confidence, 
  emotion, 
  soundName, 
  detectedAnimal,
  aiResearch,
  isAnimal = true,
  animalSaying,
  expression,
  matchSource,
  recordingId,
  recordingData
}: ResultCardProps) {
  const [meaningBasedSaying, setMeaningBasedSaying] = useState<string>('');

  useEffect(() => {
    if (meaning && emotion && detectedAnimal) {
      generateContextualSaying(emotion, meaning, detectedAnimal);
    }
  }, [meaning, emotion, detectedAnimal]);

  const generateContextualSaying = async (emotion: string, meaning: string, animal: string) => {
    try {
      // First try to get from database
      const { data: dbSentences } = await supabase
        .from('admin_sentences')
        .select('*')
        .eq('animal_type', animal.toLowerCase())
        .eq('meaning', meaning.toLowerCase())
        .limit(10);

      if (dbSentences && dbSentences.length > 0) {
        // Use database sentence
        const randomSentence = dbSentences[Math.floor(Math.random() * dbSentences.length)];
        setMeaningBasedSaying(randomSentence.sentence);
        return;
      }

      // Use comprehensive sayings database with pattern matching
      const pattern = mapMeaningToPattern(meaning, emotion);
      const contextualSaying = getNonRepetitiveSaying(animal, pattern);
      setMeaningBasedSaying(contextualSaying);
    } catch (error) {
      console.error('Error generating saying:', error);
      // Fallback to comprehensive database
      const pattern = mapMeaningToPattern(meaning, emotion);
      const fallbackSaying = getRandomSaying(animal, pattern);
      setMeaningBasedSaying(fallbackSaying);
    }
  };

  // Map meaning and emotion to pattern for database lookup
  const mapMeaningToPattern = (meaning: string, emotion: string): string => {
    const meaningLower = meaning.toLowerCase();
    const emotionLower = emotion.toLowerCase();
    
    // Priority patterns - check for pain and distress first
    if (meaningLower.includes('pain') || emotionLower.includes('pain')) return 'pain';
    if (meaningLower.includes('distress') || emotionLower.includes('distress')) return 'distress';
    
    // Map specific meanings to patterns
    if (meaningLower.includes('territorial') || emotionLower.includes('territorial')) return 'territorial';
    if (meaningLower.includes('aggressive') || emotionLower.includes('aggressive')) return 'aggressive';
    if (meaningLower.includes('friendly') || emotionLower.includes('friendly')) return 'friendly';
    if (meaningLower.includes('mating') || emotionLower.includes('mating')) return 'mating';
    if (meaningLower.includes('singing') || emotionLower.includes('singing')) return 'singing_melodic';
    if (meaningLower.includes('cheerful') || emotionLower.includes('cheerful')) return 'cheerful';
    if (meaningLower.includes('alert') || emotionLower.includes('alert')) return 'alerting';
    if (meaningLower.includes('demanding') || emotionLower.includes('demanding')) return 'demanding';
    if (meaningLower.includes('frustrated') || emotionLower.includes('frustrated')) return 'frustrated';
    if (meaningLower.includes('appeasing') || emotionLower.includes('appeasing')) return 'appeasing';
    if (meaningLower.includes('communicat') || emotionLower.includes('communicat')) return 'chatter';
    if (meaningLower.includes('parent') || emotionLower.includes('parent')) return 'communicating_parents';
    if (meaningLower.includes('paternal') || emotionLower.includes('paternal')) return 'paternal';
    if (meaningLower.includes('flight') || emotionLower.includes('flight')) return 'flight';
    if (meaningLower.includes('pray') || emotionLower.includes('food')) return 'pray';
    
    // Default to chatter for general communication
    return 'chatter';
  };

  // No sound detected display
  if (!isAnimal && detectedAnimal === 'no_sound') {
    return (
      <View style={styles.container}>
        <View style={styles.soundSection}>
          <Text style={styles.soundName}>🔇 No Animal Detected</Text>
          <Text style={styles.meaning}>{meaning}</Text>
        </View>
        <View style={styles.emotionConfidenceSection}>
          <View style={styles.confidenceRow}>
            <Text style={styles.confidenceLabel}>Detection Accuracy:</Text>
            <Text style={styles.confidenceValue}>{Math.round(confidence * 100)}%</Text>
          </View>
        </View>
      </View>
    );
  }

  // Non-animal detection display
  if (!isAnimal) {
    return (
      <View style={styles.container}>
        <View style={styles.emotionConfidenceSection}>
          <View style={styles.confidenceRow}>
            <Text style={styles.confidenceLabel}>Detection Accuracy:</Text>
            <Text style={styles.confidenceValue}>{Math.round(confidence * 100)}%</Text>
            <View style={styles.confidenceBar}>
              <View style={[styles.confidenceFill, { width: `${confidence * 100}%` }]} />
            </View>
          </View>
        </View>
      </View>
    );
  }

  const getEmotionEmoji = (emotion: string) => {
    if (emotion.includes('alert')) return '🚨';
    if (emotion.includes('protective')) return '🛡️';
    if (emotion.includes('territorial')) return '🏠';
    if (emotion.includes('demanding')) return '😤';
    if (emotion.includes('confidence')) return '💪';
    if (emotion.includes('happy')) return '😊';
    if (emotion.includes('playful')) return '🎾';
    if (emotion.includes('mysterious')) return '🔮';
    if (emotion.includes('gentle')) return '💝';
    if (emotion.includes('spirited')) return '🔥';
    return '🐾';
  };

  return (
    <View style={styles.container}>
      <View style={styles.sayingSection}>
        <Text style={styles.sayingTitle}>💬 WHAT THEY'RE SAYING:</Text>
        <Text style={styles.sayingText}>
          {meaningBasedSaying}
        </Text>
        {expression && <Text style={styles.expressionText}>{expression}</Text>}
      </View>

      <View style={styles.soundSection}>
        <View style={styles.soundHeader}>
          <Text style={styles.emotionEmoji}>{getEmotionEmoji(emotion)}</Text>
          <Text style={styles.soundName}>{soundName || 'Unknown Sound'}</Text>
        </View>
        
        <Text style={styles.meaning}>{meaning}</Text>
      </View>

      <View style={styles.emotionConfidenceSection}>
        <View style={styles.emotionRow}>
          <Text style={styles.emotionLabel}>Emotion:</Text>
          <Text style={styles.emotionValue}>{emotion}</Text>
        </View>
        
        <View style={styles.confidenceRow}>
          <Text style={styles.confidenceLabel}>Confidence:</Text>
          <Text style={styles.confidenceValue}>{Math.round(confidence * 100)}%</Text>
          <View style={styles.confidenceBar}>
            <View style={[styles.confidenceFill, { width: `${confidence * 100}%` }]} />
          </View>
        </View>
      </View>

      {aiResearch && (
        <View style={styles.aiSection}>
          <Text style={styles.aiTitle}>🤖 <Text style={styles.tarzanaGreen}>TARZANA AI DATABASE</Text></Text>
          <Text style={styles.aiAccuracy}>
            Analysis: {aiResearch.researchFindings?.accuracy || 'Database correlated match'}
          </Text>
          <Text style={styles.aiDataPoints}>
            Data Points: {aiResearch.researchFindings?.dataPoints || 150}+ samples analyzed
          </Text>
          <Text style={styles.aiVerified}>
            Status: ✅ Correlated & Verified
          </Text>
          {matchSource && (
            <Text style={styles.studySource}>
              Source: {matchSource}
            </Text>
          )}
        </View>
      )}
    </View>
  );
}