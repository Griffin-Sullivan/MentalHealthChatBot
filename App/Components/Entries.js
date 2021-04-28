import React, { useState } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, Text } from 'react-native'
// human interface guideline
// https://github.com/hectahertz/react-native-typography
// import { human } from 'react-native-typography'
import { Metrics } from '../Themes/Metrics'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default function Entries(props) {

  return (
    <View style={styles.container}>
      <FlatList
        data={props.entries}
        renderItem={( { item, index } ) =>
            <GestureRecognizer
              style={styles.innerContainer}
              onSwipeRight={() => props.deleteEntry(index)}
            >
                <View style={styles.heading}>
                    <Text style={styles.date}>{item.date}</Text>
                </View>
                <View style={styles.entry}>
                    <Text style={{fontSize: 14}}>{item.entry}</Text>
                </View>
            </GestureRecognizer>
        }
        keyExtractor={(item, index) => {
          return item + index.toString()
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  innerContainer: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 8,
    padding: 5
  },
  date: {
    fontWeight: 'bold',
    fontSize: 16
  }
});
