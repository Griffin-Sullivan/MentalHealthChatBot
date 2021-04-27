import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Slider from '@react-native-community/slider';
import Metrics from '../Themes/Metrics';


export default function App({ route, navigation }) {
  const { videoURL } = route.params;
  const { symptom } = route.params;
  const [ sliderValue, setSlider ] = useState(1);

  return(
    <View style={styles.container}>
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
        onPress={() => navigation.navigate('Details', {
          videoURL: videoURL
      })}>
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  slider: {
    width: Metrics.screenWidth * .9
  },
  heading: {
    fontSize: 24, 
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15
  },
  value: {
    fontSize: 16
  }, 
  button: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    marginTop: 10
  }
});