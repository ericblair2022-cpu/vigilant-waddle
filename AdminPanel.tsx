import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { supabase } from '@/app/lib/supabase';

interface AdminSentence {
  id: number;
  animal_type: string;
  meaning: string;
  emotion: string;
  sentence: string;
}

export default function AdminPanel() {
  const [sentences, setSentences] = useState<AdminSentence[]>([]);
  const [newSentence, setNewSentence] = useState({
    animal_type: '',
    meaning: '',
    emotion: '',
    sentence: ''
  });
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    loadSentences();
  }, []);

  const loadSentences = async () => {
    try {
      const { data, error } = await supabase.functions.invoke('admin-interface', {
        body: {},
        method: 'GET'
      });
      
      if (data?.sentences) {
        setSentences(data.sentences);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to load sentences');
    }
  };

  const addSentence = async () => {
    if (!newSentence.animal_type || !newSentence.meaning || !newSentence.emotion || !newSentence.sentence) {
      Alert.alert('Error', 'Please fill all fields');
      return;
    }

    try {
      const { data, error } = await supabase.functions.invoke('admin-interface', {
        body: { 
          action: 'add_sentence',
          ...newSentence
        }
      });

      if (data?.success) {
        setNewSentence({ animal_type: '', meaning: '', emotion: '', sentence: '' });
        loadSentences();
        Alert.alert('Success', 'Sentence added successfully');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to add sentence');
    }
  };

  const updateSentence = async (id: number) => {
    try {
      const { data, error } = await supabase.functions.invoke('admin-interface', {
        body: { 
          action: 'update_sentence',
          id,
          sentence: editText
        }
      });

      if (data?.success) {
        setEditingId(null);
        setEditText('');
        loadSentences();
        Alert.alert('Success', 'Sentence updated successfully');
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to update sentence');
    }
  };

  const deleteSentence = async (id: number) => {
    Alert.alert(
      'Confirm Delete',
      'Are you sure you want to delete this sentence?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              const { data, error } = await supabase.functions.invoke('admin-interface', {
                body: { 
                  action: 'delete_sentence',
                  id
                }
              });

              if (data?.success) {
                loadSentences();
                Alert.alert('Success', 'Sentence deleted successfully');
              }
            } catch (error) {
              Alert.alert('Error', 'Failed to delete sentence');
            }
          }
        }
      ]
    );
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#f5f5f5' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' }}>
        Admin Panel - Manage "What They're Saying"
      </Text>

      <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Add New Sentence</Text>
        
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ddd', padding: 10, marginBottom: 10, borderRadius: 5 }}
          placeholder="Animal Type (dog, cat, bird)"
          value={newSentence.animal_type}
          onChangeText={(text) => setNewSentence({ ...newSentence, animal_type: text })}
        />
        
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ddd', padding: 10, marginBottom: 10, borderRadius: 5 }}
          placeholder="Meaning (alert, playful, territorial, etc.)"
          value={newSentence.meaning}
          onChangeText={(text) => setNewSentence({ ...newSentence, meaning: text })}
        />
        
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ddd', padding: 10, marginBottom: 10, borderRadius: 5 }}
          placeholder="Emotion (excited, happy, protective, etc.)"
          value={newSentence.emotion}
          onChangeText={(text) => setNewSentence({ ...newSentence, emotion: text })}
        />
        
        <TextInput
          style={{ borderWidth: 1, borderColor: '#ddd', padding: 10, marginBottom: 10, borderRadius: 5, height: 80 }}
          placeholder="What they're saying sentence..."
          value={newSentence.sentence}
          onChangeText={(text) => setNewSentence({ ...newSentence, sentence: text })}
          multiline
        />
        
        <TouchableOpacity
          style={{ backgroundColor: '#4CAF50', padding: 12, borderRadius: 5, alignItems: 'center' }}
          onPress={addSentence}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Add Sentence</Text>
        </TouchableOpacity>
      </View>

      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Existing Sentences</Text>
      
      {sentences.map((sentence) => (
        <View key={sentence.id} style={{ backgroundColor: 'white', padding: 15, marginBottom: 10, borderRadius: 10 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
            <Text style={{ fontWeight: 'bold', color: '#666' }}>
              {sentence.animal_type} - {sentence.meaning} - {sentence.emotion}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity
                style={{ backgroundColor: '#2196F3', padding: 8, borderRadius: 5, marginRight: 5 }}
                onPress={() => {
                  setEditingId(sentence.id);
                  setEditText(sentence.sentence);
                }}
              >
                <Text style={{ color: 'white', fontSize: 12 }}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ backgroundColor: '#f44336', padding: 8, borderRadius: 5 }}
                onPress={() => deleteSentence(sentence.id)}
              >
                <Text style={{ color: 'white', fontSize: 12 }}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
          
          {editingId === sentence.id ? (
            <View>
              <TextInput
                style={{ borderWidth: 1, borderColor: '#ddd', padding: 10, marginBottom: 10, borderRadius: 5, height: 60 }}
                value={editText}
                onChangeText={setEditText}
                multiline
              />
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                  style={{ backgroundColor: '#4CAF50', padding: 8, borderRadius: 5, marginRight: 10, flex: 1 }}
                  onPress={() => updateSentence(sentence.id)}
                >
                  <Text style={{ color: 'white', textAlign: 'center' }}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{ backgroundColor: '#666', padding: 8, borderRadius: 5, flex: 1 }}
                  onPress={() => {
                    setEditingId(null);
                    setEditText('');
                  }}
                >
                  <Text style={{ color: 'white', textAlign: 'center' }}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <Text style={{ fontSize: 14, lineHeight: 20 }}>{sentence.sentence}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
}