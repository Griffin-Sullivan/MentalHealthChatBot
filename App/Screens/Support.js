import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import WebView from 'react-native-webview';
import { LinearGradient } from 'expo-linear-gradient';

import Metrics from '../Themes/Metrics';
import Colors from '../Themes/Colors';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';  

export default function App({ route, navigation }) {
  const [options, setOptions] = useState([
    {
      title: 'National Suicide Prevention Hotline',
      website_uri: 'https://suicidepreventionlifeline.org',
      id: '1',
      bgColor: '#fe85b0',
      icon: <MaterialCommunityIcons name="phone-classic" size={60} color="black" />,
    },
    {
      title: 'Veterans Crisis Line',
      website_uri: 'https://www.veteranscrisisline.net',
      id: '2',
      bgColor: '#ff9182',
      icon: <FontAwesome name="users" size={60} color="black" />,
    },
    {
      title: 'Mental Health Government Website',
      website_uri: 'https://www.mentalhealth.gov',
      id: '3',
      bgColor: '#ffb647',
      icon: <MaterialCommunityIcons name="hospital-building" size={60} color="black" />,
    },
    {
      title: 'Behavioral Health Treatment Services Locator',
      website_uri: 'https://findtreatment.samhsa.gov',
      id: '4',
      bgColor: '#f4e602',
      icon: <MaterialCommunityIcons name="head-heart" size={80} color="black" />,
    },
  ]);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[Colors.gradientA2, Colors.gradientA1]}
        start={[0.1, 0.1]}
        style={styles.background}
      />
      <View style={styles.flatListContainer}>
        <FlatList
          numColumns={1}
          keyExtractor={(item) => item.id}
          data={options}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('Support Details', {
                  website_uri: item.website_uri,
                })
              }
              style={styles.button}>
              <View
                style={{
                  backgroundColor: item.bgColor,
                  alignItems: 'left',
                  alignContent: 'left',
                }}>
                <Text style={styles.options}>{item.icon}                         {item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(43, 192, 228, 1)',
  },
  flatListContainer: {
    flexDirection: 'column',
    flex: 1,
    height: Metrics.screenHeight *1,
  },
  icon: {
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'center',
  },
  options: {
    fontSize: 22,
    fontFamily: 'HelveticaNeue-Medium',
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 90,
    marginVertical: 50,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Metrics.screenHeight * 1,
  },
});
