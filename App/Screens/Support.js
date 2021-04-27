import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';


import Metrics from '../Themes/Metrics'



export default function App(props, { route, navigation }) {
  const [options, setOptions] = useState([
{ title: 'National Suicide Prevention Hotline', website_uri:'https://suicidepreventionlifeline.org', id: '1' },
{ title: 'Veterans Crisis Line', website_uri:'https://www.veteranscrisisline.net', id: '2' },
{ title: 'Mental Health Government Website', website_uri:'https://www.mentalhealth.gov', id: '3' },
{ title: 'Behavioral Health Treatment Services Locator', website_uri:'https://findtreatment.samhsa.gov', id: '4' },
  ]);

const getWebView = (website_uri) =>{
  return( <WebView
    source={{ uri: website_uri }}
    />
  )
}

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={1}
        keyExtractor={(item) => item.id}
        data={options}
        renderItem={({ item }) => 
        <TouchableOpacity onPress={() => getWebView(item.website_uri)}>
          <Text style={styles.options}>{item.title}</Text>
        </TouchableOpacity>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    marginTop: 40,
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  options:{
    fontSize: 20,
    alignItems:'center',
    padding: 10,
    borderWidth:1,
    borderRadius: 20,
    marginHorizontal: 10,
    marginTop: 10,
  }
});
