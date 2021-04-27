import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Container } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';


import Metrics from '../Themes/Metrics'
import Navigator from '../Navigation/Navigator';
import Symptoms from './Symptoms';


export default function App({ route, navigation }) {

   const video = React.useRef(null);
   const { external, videoURL } = route.params;

  return(
    <Container>
      <Video 
        ref={video}
        source={videoURL}
        />
    </Container>
  )
}

const styles = StyleSheet.create({

});
