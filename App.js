import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView, Image } from 'react-native';
import Map from "./components/views/Map"
import Home from "./components/views/Home"
import Cards from "./components/views/Cards"
import Settings from "./components/views/Settings"
import Chart from "./components/views/Chart"

const Tab = createBottomTabNavigator();
function NavigationBar() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: "#ddad02",
                inactiveTintColor: "#ffffff",
                labelStyle: {
                    fontSize: 12,
                },
                style: {
                    backgroundColor: "rgba(60,60,60,1.0)",
                    paddingBottom: 2,
                    paddingTop: 2,
                    height: 65,
                },
            }}>
 <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={require('./assets/img/6.png')}
                                style={{width: 26, height: 26}}
                                resizeMode="contain"
                            />
                        )
                    },
                }}/>
 <Tab.Screen
                name="Map"
                component={Map}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={require('./assets/img/7.png')}
                                style={{width: 26, height: 26}}
                                resizeMode="contain"
                            />
                        )
                    },
                }}/>
 <Tab.Screen
                name="Search"
                component={Cards}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={require('./assets/img/8.png')}
                                style={{width: 26, height: 26}}
                                resizeMode="contain"
                            />
                        )
                    },
                }}/>
 <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={require('./assets/img/9.png')}
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
                        name="Chart"
                        component={Chart}/>
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
        </>
    )
}