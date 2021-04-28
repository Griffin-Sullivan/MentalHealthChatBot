import React, { useState, useCallback, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat';
import { LinearGradient } from 'expo-linear-gradient';

import Colors from '../Themes/Colors';
import Metrics from '../Themes/Metrics';


export default function App({ route, navigation }) {
  const [messages, setMessages] = useState([]);

  const bot = {
    _id: 2,
    name: 'Mental Health Bot',
    avatar: 'https://placeimg.com/140/140/any',
  };

  useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: 'How are you feeling today?',
        quickReplies: {
          type: 'radio', // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: 'Bad',
              value: 'bad',
            },
            {
              title: 'Okay',
              value: 'okay',
            },
            {
              title: 'Good',
              value: 'good',
            },
            {
              title: 'Great',
              value: 'great',
            },
          ],
        },
        createdAt: new Date(),
        user: bot,
      },
      {
        _id: 1,
        text:
          "Hey there! Welcome to Mental Health Chat Bot. My name is Botsy. I am here to help you talk about what's on your mind.",
        createdAt: new Date(),
        user: bot,
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  return (
    <LinearGradient
      colors={[Colors.gradientA2, Colors.gradientA1]}
      start={[0.1, 0.1]}
      style={styles.background}>
      <GiftedChat
        style={styles.chat}
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: Metrics.screenHeight * 1,
    paddingBottom: 160,
  },
  chat: {
    backgroundColor: Colors.gradientA1,
  },
});
