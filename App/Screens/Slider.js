import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { LinearGradient } from 'expo-linear-gradient';

import Metrics from '../Themes/Metrics';
import Colors from '../Themes/Colors';

export default function App({ route, navigation }) {
  const { videoURL } = route.params;
  const { symptom } = route.params;
  const [sliderValue, setSlider] = useState(1);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.gradientA2, Colors.gradientA1]}
        start={[0.1, 0.1]}
        style={styles.background}
      />
      <Text style={styles.heading}>How severe is your {symptom} today?</Text>
      <Slider
        style={styles.slider}
        maximumValue={10}
        minimumValue={1}
        step={1}
        minimumTrackTintColor="#307ecc"
        maximumTrackTintColor="#000000"
        value={sliderValue}
        onValueChange={(sliderValue) => setSlider(sliderValue)}
      />
      <Text style={styles.value}>{sliderValue}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Details', {
            videoURL: videoURL,
          })
        }>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(43, 192, 228, 1)',
  },
  slider: {
    width: Metrics.screenWidth * 0.9,
  },
  heading: {
    fontSize: 24,
    fontFamily: '',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeue-Medium',
  },
  button: {
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: Colors.gradientA2,
  },
  buttonText:{
    fontSize: 20,
    fontFamily: 'HelveticaNeue-Medium',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Metrics.screenHeight * 1,
  },
});
