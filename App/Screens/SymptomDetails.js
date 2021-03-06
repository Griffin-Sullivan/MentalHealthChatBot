import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';



export default function App({ route, navigation }) {
  const { videoURL } = route.params;


  return(
    <View style={styles.container}>
      <WebView 
        source={{ uri: videoURL }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
