import * as React from 'react';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Chat from '../Screens/Chat';
import Symptoms from '../Screens/Symptoms';
import SymptomDetails from '../Screens/SymptomDetails';
import Support from '../Screens/Support';
import Journal from '../Screens/Journal';
import SupportDetails from '../Screens/SupportDetails';
import Slider from '../Screens/Slider';
import Colors from '../Themes/Colors';

const ChatStack = createStackNavigator();
 
function ChatStackScreen() {
  return (
    <ChatStack.Navigator>
      <ChatStack.Screen
        name="Chat"
        component={Chat}
        options={{
           headerStyle: {
            backgroundColor: '#EAECC6',
          },
        }}
      />
    </ChatStack.Navigator>
  );
}

const JournalStack = createStackNavigator();

function JournalStackScreen() {
  return (
    <JournalStack.Navigator>
      <JournalStack.Screen
        name="Journal"
        component={Journal}
        options={{
           headerStyle: {
            backgroundColor: '#EAECC6',
          },
        }}
      />
    </JournalStack.Navigator>
  );
}

const SymptomStack = createStackNavigator();

function SymptomsStackScreen() {
  return (
    <SymptomStack.Navigator>
      <SymptomStack.Screen
        name="Symptoms"
        component={Symptoms}
        options={{
          headerStyle: {
            backgroundColor: '#fe85b0',
          },
        }}
      />
      <SymptomStack.Screen
        name="Severity Slider"
        component={Slider}
        options={{
           headerStyle: {
            backgroundColor: '#EAECC6',
          },
        }}
      />
      <SymptomStack.Screen
        name="Details"
        component={SymptomDetails}
        options={{
          headerStyle: {
            backgroundColor: '#FFF',
          },
        }}
      />
    </SymptomStack.Navigator>
  );
}

const SupportStack = createStackNavigator();

function SupportStackScreen() {
  return (
    <SupportStack.Navigator>
      <SupportStack.Screen
        name="Support"
        component={Support}
        options={{
          headerStyle: {
            backgroundColor: '#fe85b0',
          },
        }}
      />
      <SupportStack.Screen
        name="Support Details"
        component={SupportDetails}
        options={{
          headerStyle: {
            backgroundColor: '#fff',
          },
        }}
      />
    </SupportStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Chat') {
              iconName = 'chatbox-ellipses';
            } else if (route.name === 'Journal') {
              iconName = 'journal';
            } else if (route.name === 'Symptoms') {
              iconName = 'thermometer';
            } else if (route.name === 'Support') {
              iconName = 'ios-help-buoy';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          labelStyle: { fontSize: 14, fontWeight: 'bold' },
          activeTintColor: Colors.gradientA2,
          inactiveTintColor: '#CDCDCD',
          style: {
            height: '9%',
            paddingBottom: '4%',
            paddingTop: '1%',
            backgroundColor: Colors.gradientA1,
          },
        }}>
        <Tab.Screen name="Chat" component={ChatStackScreen} />
        <Tab.Screen name="Journal" component={JournalStackScreen} />
        <Tab.Screen name="Symptoms" component={SymptomsStackScreen} />
        <Tab.Screen name="Support" component={SupportStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


