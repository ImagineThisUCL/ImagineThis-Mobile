import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SetUpView from "./components/views/SetUp"
import SetUpInlineView from "./components/views/SetUpInline"
import SetUpComponentsView from "./components/views/SetUpComponents"
import InformationPopulateView from "./components/views/InformationPopulate"
import HomeView from "./components/views/Home"
import NetworkView from "./components/views/Network"
import ContactView from "./components/views/Contact"
import SettingsView from "./components/views/Settings"
import WellbeingView from "./components/views/Wellbeing"
import NudgeView from "./components/views/Nudge"
import TrackingView from "./components/views/Tracking"
import WeeklyConfirmWellbeingView from "./components/views/WeeklyConfirmWellbeing"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from "@expo/vector-icons/Ionicons"
import { StyleSheet, Text, SafeAreaView, StatusBar, Image } from 'react-native';

const Tab = createBottomTabNavigator();

// Bottom tab navigation is defined here and then nested in a Stack.Navigator
function TabNavigationScreens() {
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
                    tabBarIcon: () => {
                        return (
                            /* Option a with require and asset in the img folder */
                            <Image
                                source={require('./assets/img/icon-heart.png')}
                                style={{width: 22, height: 22}}
                            />
                        )
                    },
                }}/>
            <Tab.Screen
                name="Home"
                component={HomeView}
                options={{
                    tabBarIcon: () => {
                        return (
                            /* Option b with uri */
                            <Image
                                source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Font_Awesome_5_solid_home.svg/270px-Font_Awesome_5_solid_home.svg.png'}}
                                style={{width: 24, height: 22}}
                            />
                        )
                    },
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
        <>
        <SafeAreaView style={{flex: 0, backgroundColor: '#ffffff'}}/>
        <SafeAreaView style={{flex: 1, backgroundColor: "#D5E6EC"}}>

            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={TabNavigationScreens}
                        options={{headerShown: false}}/>
                    <Stack.Screen name="Set Up" component={SetUpView} />
                    <Stack.Screen name="Set Up Inline" component={SetUpInlineView} />
                    <Stack.Screen name="Set Up Components" component={SetUpComponentsView} />
                    <Stack.Screen name="Information Populate" component={InformationPopulateView} />
                    <Stack.Screen name="Weekly Confirm Wellbeing" component={WeeklyConfirmWellbeingView} />
                    <Stack.Screen name="Nudge" component={NudgeView} />
                    <Stack.Screen name="Tracking" component={TrackingView} />
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
        </>
    )
}
