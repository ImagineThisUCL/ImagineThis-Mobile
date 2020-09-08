import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { SafeAreaView, Image } from 'react-native';
import MessagesSent from "./components/views/MessagesSent"
import ReportforSharing from "./components/views/ReportForSharing"
import WellbeingNetwork from "./components/views/WellbeingNetwork"
import HomePageWeekly from "./components/views/HomePageWeekly"
import SetUp from "./components/views/SetUp"
import WeeklyConfirmWellbeing from "./components/views/WeeklyConfirmWellbeing"
import DementiaSupport1 from "./components/views/DementiaSupport1"
import StartPassiveTrackingandReporting from "./components/views/StartPassiveTrackingandReporting"
import WellbeingbyActivity from "./components/views/WellbeingbyActivity"
import Informationtopopulatmessages from "./components/views/Informationtopopulatmessages"
import DementiaSupport2 from "./components/views/DementiaSupport2"
import Dewis from "./components/views/Dewis"
import Torfaen from "./components/views/Torfaen"
import ABUB from "./components/views/ABUB"
import FriendofMine from "./components/views/FriendofMine"
import CarersTrust from "./components/views/CarersTrust"
import Wellbeingrating from "./components/views/Wellbeingrating"
import OutdoorstepsvWellbeing from "./components/views/OutdoorstepsvWellbeing"
import Reachout from "./components/views/Reachout"
import AgeConnect from "./components/views/AgeConnect"
import Headspace from "./components/views/Headspace"
import CareNetworkPage from "./components/views/CareNetworkPage"
import AutoPopulatedMesage1 from "./components/views/AutoPopulatedMesage1"
import AutoPopulatedMesage2 from "./components/views/AutoPopulatedMesage2"
import CallsmadevWellbeing from "./components/views/CallsmadevWellbeing"

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
                    backgroundColor: "rgba(213,230,235,1.0)",
                    paddingBottom: 2,
                    paddingTop: 2,
                    height: 65,
                },
            }}>
 <Tab.Screen
                name="Network"
                component={WellbeingNetwork}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={require('./assets/img/114.png')}
                                style={{width: 26, height: 26}}
                                resizeMode="contain"
                            />
                        )
                    },
                }}/>
 <Tab.Screen
                name="Well-being"
                component={ReportforSharing}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={require('./assets/img/115.png')}
                                style={{width: 26, height: 26}}
                                resizeMode="contain"
                            />
                        )
                    },
                }}/>
 <Tab.Screen
                name="Home"
                component={HomePageWeekly}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={require('./assets/img/116.png')}
                                style={{width: 26, height: 26}}
                                resizeMode="contain"
                            />
                        )
                    },
                }}/>
 <Tab.Screen
                name="Contact"
                component={MessagesSent}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={require('./assets/img/117.png')}
                                style={{width: 26, height: 26}}
                                resizeMode="contain"
                            />
                        )
                    },
                }}/>
 <Tab.Screen
                name="Settings"
                component={SetUp}
                options={{
                    tabBarIcon: () => {
                        return (
                            <Image
                                source={require('./assets/img/118.png')}
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
                        name="WeeklyConfirmWellbeing"
                        component={WeeklyConfirmWellbeing}/>
                    <Stack.Screen
                        name="DementiaSupport1"
                        component={DementiaSupport1}/>
                    <Stack.Screen
                        name="StartPassiveTrackingandReporting"
                        component={StartPassiveTrackingandReporting}/>
                    <Stack.Screen
                        name="WellbeingbyActivity"
                        component={WellbeingbyActivity}/>
                    <Stack.Screen
                        name="Informationtopopulatmessages"
                        component={Informationtopopulatmessages}/>
                    <Stack.Screen
                        name="DementiaSupport2"
                        component={DementiaSupport2}/>
                    <Stack.Screen
                        name="Dewis"
                        component={Dewis}/>
                    <Stack.Screen
                        name="Torfaen"
                        component={Torfaen}/>
                    <Stack.Screen
                        name="ABUB"
                        component={ABUB}/>
                    <Stack.Screen
                        name="FriendofMine"
                        component={FriendofMine}/>
                    <Stack.Screen
                        name="CarersTrust"
                        component={CarersTrust}/>
                    <Stack.Screen
                        name="Wellbeingrating"
                        component={Wellbeingrating}/>
                    <Stack.Screen
                        name="OutdoorstepsvWellbeing"
                        component={OutdoorstepsvWellbeing}/>
                    <Stack.Screen
                        name="Reachout"
                        component={Reachout}/>
                    <Stack.Screen
                        name="AgeConnect"
                        component={AgeConnect}/>
                    <Stack.Screen
                        name="Headspace"
                        component={Headspace}/>
                    <Stack.Screen
                        name="CareNetworkPage"
                        component={CareNetworkPage}/>
                    <Stack.Screen
                        name="AutoPopulatedMesage1"
                        component={AutoPopulatedMesage1}/>
                    <Stack.Screen
                        name="AutoPopulatedMesage2"
                        component={AutoPopulatedMesage2}/>
                    <Stack.Screen
                        name="CallsmadevWellbeing"
                        component={CallsmadevWellbeing}/>
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
        </>
    )
}