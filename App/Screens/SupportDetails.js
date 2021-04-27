import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';



export default function App({ route, navigation }) {
  const { website_uri } = route.params;


  return(
    <View style={styles.container}>
      <WebView 
        source={{ uri: website_uri }}
        />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});