import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';  

import Metrics from '../Themes/Metrics';
import Colors from '../Themes/Colors';


export default function App({ route, navigation }) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.gradientA2, Colors.gradientA1]}
        start={[0.1, 0.1]}
        style={styles.background}
      />
      <ScrollView style={styles.symptomsContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Severity Slider', {
              videoURL: 'https://www.youtube.com/watch?v=MB5IX-np5fE',
              symptom: 'anxiety',
            })
          }>
          <LinearGradient
            colors={[Colors.color1, Colors.color1]}
            locations={[1, 0]}
            style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>
            <Ionicons name="sad-outline" size={45} color="black" />    Anxiety</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Severity Slider', {
              videoURL: 'https://youtu.be/6P2nPI6CTlc',
              symptom: 'hopelessness',
            })
          }>
          <LinearGradient
            colors={[Colors.color2, Colors.color2]}
            locations={[1, 0]}
            style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>
            <FontAwesome5 name="sad-cry" size={40} color="black" />    Hopelessness</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Severity Slider', {
              videoURL: 'https://youtu.be/p-at-yS6eaU',
              symptom: 'guilt',
            })
          }>
          <LinearGradient
            colors={[Colors.color3, Colors.color3]}
            locations={[1, 0]}
            style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>
            <FontAwesome5 name="meh-blank" size={40} color="black" />    Guilt</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Severity Slider', {
              videoURL: 'https://youtu.be/EtphOKEOHaI',
              symptom: 'anhedonia',
            })
          }>
          <LinearGradient
            colors={[Colors.color4, Colors.color4]}
            locations={[1, 0]}
            style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>
            <FontAwesome5 name="meh" size={40} color="black" />    Anhedonia</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Severity Slider', {
              videoURL: 'https://youtu.be/CDvnw8eOjFQ',
              symptom: 'mental fatigue',
            })
          }>
          <LinearGradient
            colors={[Colors.color5, Colors.color5]}
            locations={[1, 0]}
            style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>
            <FontAwesome5 name="tired" size={40} color="black" />    Mental Fatigue</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Severity Slider', {
              videoURL: 'https://youtu.be/Hu4Yvq-g7_Y',
              symptom: 'difficulty concentrating',
            })
          }>
          <LinearGradient
            colors={[Colors.color6, Colors.color6]}
            locations={[1, 0]}
            style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>
            <MaterialCommunityIcons name="brain" size={45} color="black" />    Difficulty Concentrating</Text>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Severity Slider', {
              videoURL: 'https://youtu.be/j5Sl8LyI7k8',
              symptom: 'insomnia',
            })
          }>
          <LinearGradient
            colors={[Colors.color7, Colors.color7]}
            locations={[1, 0]}
            style={styles.symptomsInnerContainer}>
            
            <Text style={styles.symptom}>
            <MaterialCommunityIcons name="sleep-off" size={40} color="black" />    Insomnia</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Severity Slider', {
              videoURL: 'https://youtu.be/Ssr2UDB9EWQ',
              symptom: 'appetite',
            })
          }>
          <LinearGradient
            colors={[Colors.color8, Colors.color8]}
            locations={[1, 0]}
            style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>
            <MaterialCommunityIcons name="food-off" size={40} color="black" />    Apetite Issues</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Severity Slider', {
              videoURL: 'https://youtu.be/EfcXS8MUivo',
              symptom: 'suicidal thoughts',
            })
          }>
          <LinearGradient
            colors={[Colors.color9, Colors.color9]}
            locations={[1, 0]}
            style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>
            <FontAwesome5 name="user-alt-slash" size={40} color="black" />    Suicidal Thoughts</Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Severity Slider', {
              videoURL: 'https://youtu.be/v-t1Z5-oPtU',
              symptom: 'physical symptom',
            })
          }>
          <LinearGradient
            colors={[Colors.color10, Colors.color10]}
            locations={[1, 0]}
            style={styles.symptomsInnerContainer}>
            <Text style={styles.symptom}>
            <FontAwesome5 name="user-injured" size={40} color="black" />    Physical Symptoms</Text>
          </LinearGradient>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(43, 192, 228, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  symptomsContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  symptomsInnerContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingHorizontal: 5,
    height: 100,
    width: Metrics.screenWidth * 1,
    textAlign: 'left',
  },
  symptom: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeue-Medium',
    alignContent: 'center',
    textAlign: 'left',
    color: '#000',
    paddingHorizontal: 5,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Metrics.screenHeight * 1,
  },
});
