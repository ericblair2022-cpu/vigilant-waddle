import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface HistoryItem {
  id: string;
  emotion: string;
  meaning: string;
  timestamp: string;
  confidence: number;
}

interface HistoryCardProps {
  item: HistoryItem;
  onPress: () => void;
}

export default function HistoryCard({ item, onPress }: HistoryCardProps) {
  const getEmotionIcon = (emotion: string) => {
    switch (emotion.toLowerCase()) {
      case 'happy': return 'happy-outline';
      case 'excited': return 'flash-outline';
      case 'anxious': return 'alert-circle-outline';
      case 'hungry': return 'restaurant-outline';
      case 'playful': return 'football-outline';
      case 'alert': return 'eye-outline';
      case 'communicative': return 'chatbubble-outline';
      case 'demanding': return 'megaphone-outline';
      default: return 'paw-outline';
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={getEmotionIcon(item.emotion) as any}
            size={24}
            color="#FF6B6B"
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.emotion}>{item.emotion}</Text>
          <Text style={styles.timestamp}>{item.timestamp}</Text>
        </View>
        <Text style={styles.confidence}>{item.confidence}%</Text>
      </View>
      <Text style={styles.meaning} numberOfLines={2}>
        {item.meaning}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 107, 107, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  emotion: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    textTransform: 'capitalize',
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 2,
  },
  confidence: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  meaning: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
});