import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';

import Metrics from '../Themes/Metrics'
import Navigator from '../Navigation/Navigator';


export default function App({ route, navigation }) {

  return (
    <View style={styles.container}> 
      <ScrollView style={styles.symptomsContainer}>
        <TouchableOpacity onPress={()=> navigation.navigate('SymptomDetails', {
          external: true,
          videoURL: 'https://youtu.be/MB5IX-np5fE', 
        }
        )}>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Persistent sad, anxious, or "empty" mood</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('SymptomDetails', {
          external: true,
          videoURL: 'https://youtu.be/6P2nPI6CTlc', 
        }
        )}>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Feelings of hopelessness</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('SymptomDetails', {
          external: true,
          videoURL: 'https://youtu.be/p-at-yS6eaU', 
        }
        )}>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Feelings of guilt</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('SymptomDetails', {
          external: true,
          videoURL: 'https://youtu.be/EtphOKEOHaI', 
        }
        )}>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Loss of interest in hobbies and activities</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('SymptomDetails', {
          external: true,
          videoURL: 'https://youtu.be/CDvnw8eOjFQ', 
        }
        )}>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Decreased energy and fatigue</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('SymptomDetails', {
          external: true,
          videoURL: 'https://youtu.be/Hu4Yvq-g7_Y', 
        }
        )}>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Difficulty concentrating</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('SymptomDetails', {
          external: true,
          videoURL: 'https://youtu.be/j5Sl8LyI7k8', 
        }
        )}>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Insomnia</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('SymptomDetails', {
          external: true,
          videoURL: 'https://youtu.be/Ssr2UDB9EWQ', 
        }
        )}>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Problems with appetite</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('SymptomDetails', {
          external: true,
          videoURL: 'https://youtu.be/EfcXS8MUivo', 
        }
        )}>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Suicidal thoughts</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('SymptomDetails', {
          external: true,
          videoURL: 'https://youtu.be/v-t1Z5-oPtU', 
        }
        )}>
          <View style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>Consistent physical symptoms like headaches</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    },
    heading: {
      marginTop: 40,
      fontSize: 28,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    symptomsContainer: {
      flexDirection: 'column',
      marginTop: 10,
      flex: 1
    },
    symptomsInnerContainer: {
      flexDirection: 'column',
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      borderWidth: 2,
      borderColor: 'black',
      height: 50,
      width: Metrics.screenWidth * .9,
      textAlign: 'center',
      borderRadius: 35 / 2
    },
    symptom: {
      fontSize: 16
    }
  });