import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import WebView from 'react-native-webview';

import Colors from '../Themes/Colors';
import Metrics from '../Themes/Metrics';



export default function App({ route, navigation }) {
  const { website_uri } = route.params;


  return(
    <View style={styles.container}>
    <LinearGradient 
          colors={[Colors.gradientA2, Colors.gradientA1]}
      start={[0.1, 0.1]}
      style={styles.background}
    />
      <WebView 
        source={{ uri: website_uri }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gradientA1,
  },
    background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Metrics.screenHeight * 1,
  },
});