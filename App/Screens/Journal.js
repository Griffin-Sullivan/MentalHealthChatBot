import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import Metrics from '../Themes/Metrics';
import Entries from '../Components/Entries';
import Colors from '../Themes/Colors';

import AsyncStorage from '@react-native-community/async-storage';
import { useHeaderHeight } from '@react-navigation/stack';
import { LinearGradient } from 'expo-linear-gradient';

export default function App({ route, navigation }) {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  const loadEntries = (entries_string) => {
    setEntries(JSON.parse(entries_string));
  };

  const storeEntries = async (newEntry) => {
    try {
      await AsyncStorage.setItem('entries', JSON.stringify(newEntry));
    } catch (e) {
      console.error(e);
    }
  };

  const readEntries = async () => {
    try {
      const storage_entries = await AsyncStorage.getItem('entries');
      if (storage_entries !== null) {
        loadEntries(storage_entries);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addEntry = () => {
    let date = new Date();
    let date_string = date.toLocaleString('en-US');
    storeEntries([...entries, { date: date_string, entry: entry }]);
    setEntries([...entries, { date: date_string, entry: entry }]);
    setEntry('');
  };

  useEffect(() => {
    readEntries();
  }, []);

  const deleteEntry = (index) => {
    let newEntries = [...entries];
    newEntries.splice(index, 1);
    storeEntries(newEntries);
    setEntries(newEntries);
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.gradientA2, Colors.gradientA1]}
        start={[0.1, 0.1]}
        style={styles.background}
      />
      <View style={styles.entriesContainer}>
        <Entries entries={entries} deleteEntry={deleteEntry} />
      </View>
      <KeyboardAvoidingView
        style={styles.inputContainer}
        behavior="padding"
        keyboardVerticalOffset={useHeaderHeight()}>
        <TextInput
          placeholder="What's on your mind today?"
          onChangeText={(entry) => setEntry(entry)}
          clearButtonMode="always"
          multiline={true}
          onSubmitEditing={() => addEntry()}
          style={styles.textInput}
        />
        <TouchableOpacity onPress={() => addEntry()}>
          <View style={styles.submitButton}>
            <Text style={{fontWeight: 'bold'}}>Submit</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    width: Metrics.screenWidth * 0.8,
    backgroundColor: 'white',
    height: 50,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'cetner',
    fontSize: 16,
  },
  entriesContainer: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Metrics.screenHeight * 1,
  },
  submitButton: {
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 75,
  },
});
