import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SetUpView from "./components/views/SetUp"
import SetUpInlineView from "./components/views/SetUpInline"
import SetUpComponentsView from "./components/views/SetUpComponents"
import FormComponentsView from "./components/views/FormComponents"
import HomeView from "./components/views/Home"
import NetworkView from "./components/views/Network"
import ContactView from "./components/views/Contact"
import SettingsView from "./components/views/Settings"
import WellbeingView from "./components/views/Wellbeing"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "@expo/vector-icons/Ionicons"

const Tab = createBottomTabNavigator();

// Bottom tab navigation is defined here and then nested in a Stack.Navigator
function HomeScreen() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#147EFB",
                inactiveTintColor: "#000000",
                labelStyle: {
                    fontSize: 12,
                },
                style: {
                    backgroundColor: "#D5E6EC",
                    paddingBottom: 2
                },
            }}>
            <Tab.Screen
                name="Network"
                component={NetworkView}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-contacts" color={color} size={size} />
                    )
                }}/>
            <Tab.Screen
                name="Well-being"
                component={WellbeingView}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-heart" color={color} size={size} />
                    )
                }}/>
            <Tab.Screen
                name="Home"
                component={HomeView}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-home" color={color} size={size} />
                    )
                }}/>
            <Tab.Screen
                name="Contact"
                component={ContactView}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-mail" color={color} size={size} />
                    )
                }}/>
            <Tab.Screen
                name="Settings"
                component={SettingsView}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-settings" color={color} size={size} />
                    )
                }}/>
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
                <Stack.Screen name="FormComponents" component={FormComponentsView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
