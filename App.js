import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView, Image } from 'react-native';
import Browse from "./components/views/Browse"
import Post from "./components/views/Post"
import Profile from "./components/views/Profile"
import Register from "./components/views/Register"
import ZoomedImage from "./components/views/ZoomedImage"
import Offer from "./components/views/Offer"
import Activity from "./components/views/Activity"
import LogIn from "./components/views/LogIn"
import Map from "./components/views/Map"
import Detail from "./components/views/Detail"

const Tab = createBottomTabNavigator();
function NavigationBar() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#147EFB",
                inactiveTintColor: "#000000",
                labelStyle: {
                    fontSize: 12,
                },
                style: {
                    backgroundColor: "rgba(255,255,255,1.0)",
                    paddingBottom: 2,
                    paddingTop: 2,
                    height: 65,
                },
            }}>
 <Tab.Screen
                name="Post"
                component={Post}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={require('./assets/img/25.png')}
                                style={{width: 26, height: 26}}
                                resizeMode="contain"
                            />
                        )
                    },
                }}/>
 <Tab.Screen
                name="Browse"
                component={Browse}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={require('./assets/img/26.png')}
                                style={{width: 26, height: 26}}
                                resizeMode="contain"
                            />
                        )
                    },
                }}/>
 <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={require('./assets/img/27.png')}
                                style={{width: 26, height: 26}}
                                resizeMode="contain"
                            />
                        )
                    },
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
                <Stack.Navigator initialRouteName="NavigationBar">
                    <Stack.Screen
                        name="NavigationBar"
                        component={NavigationBar}
                        options={{headerShown: false}}/>
                    <Stack.Screen
                        name="Register"
                        component={Register}/>
                    <Stack.Screen
                        name="ZoomedImage"
                        component={ZoomedImage}/>
                    <Stack.Screen
                        name="Offer"
                        component={Offer}/>
                    <Stack.Screen
                        name="Activity"
                        component={Activity}/>
                    <Stack.Screen
                        name="LogIn"
                        component={LogIn}/>
                    <Stack.Screen
                        name="Map"
                        component={Map}/>
                    <Stack.Screen
                        name="Detail"
                        component={Detail}/>
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
        </>
    )
}