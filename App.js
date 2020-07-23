import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import base from "./assets/baseStyle"
import SetUpView from "./components/views/SetUp"
import SetUpInlineView from "./components/views/SetUpInline"
import SetUpComponentsView from "./components/views/SetUpComponents"
import HomeView from "./components/views/Home"
import NetworkView from "./components/views/Home"
import ContactView from "./components/views/Home"
import SettingsView from "./components/views/Home"
import WellbeingView from "./components/views/Home"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Network" component={NetworkView} />
        <Tab.Screen name="Well-being" component={WellbeingView} />
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Contact" component={ContactView} />
        <Tab.Screen name="Settings" component={SettingsView} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{headerShown: false}}/>
                <Stack.Screen name="SetUp" component={SetUpView} />
                <Stack.Screen name="SetUpInline" component={SetUpInlineView} />
                <Stack.Screen name="SetUpComponents" component={SetUpComponentsView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
