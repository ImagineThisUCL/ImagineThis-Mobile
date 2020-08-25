import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet, Text, SafeAreaView, Image, StatusBar} from 'react-native';
import Reachout from "./components/views/Reachout"
import WellbeingbyActivity from "./components/views/WellbeingbyActivity"
import HomePageWeekly from "./components/views/HomePageWeekly"
import WeeklyConfirmWellbeing from "./components/views/WeeklyConfirmWellbeing"
import DementiaSupport1 from "./components/views/DementiaSupport1"
import StartPassiveTrackingandReporting from "./components/views/StartPassiveTrackingandReporting"
import Informationtopopulatmessages from "./components/views/Informationtopopulatmessages"
import DementiaSupport2 from "./components/views/DementiaSupport2"
import Dewis from "./components/views/Dewis"
import Torfaen from "./components/views/Torfaen"
import ABUB from "./components/views/ABUB"
import MessagesSent from "./components/views/MessagesSent"
import ReportforSharing from "./components/views/ReportforSharing"
import WellbeingNetwork from "./components/views/WellbeingNetwork"
import FriendofMine from "./components/views/FriendofMine"
import CarersTrust from "./components/views/CarersTrust"
import Wellbeingrating from "./components/views/Wellbeingrating"
import OutdoorstepsvWellbeing from "./components/views/OutdoorstepsvWellbeing"
import AgeConnect from "./components/views/AgeConnect"
import Headspace from "./components/views/Headspace"
import AutoPopulatedMesage1 from "./components/views/AutoPopulatedMesage1"
import CareNetworkPage from "./components/views/CareNetworkPage"
import AutoPopulatedMesage2 from "./components/views/AutoPopulatedMesage2"
import CallsmadevWellbeing from "./components/views/CallsmadevWellbeing"
import SetUp from "./components/views/SetUp"

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
                    backgroundColor: "#D5E6EC",
                    paddingBottom: 2
                },
            }}>
 <Tab.Screen
                name="Network"
                component={WellbeingNetwork}
                options={{
                    tabBarIcon: () => {
                        return (
                            /* Option b with uri */
                            <Image
                                source={require('./assets/img/62.png')}
                                style={{width: 24, height: 22}}
                            />
                        )
                    },
                }}/>
 <Tab.Screen
                name="Well-being"
                component={Reachout}
                options={{
                    tabBarIcon: () => {
                        return (
                            /* Option b with uri */
                            <Image
                                source={require('./assets/img/63.png')}
                                style={{width: 24, height: 22}}
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
                            /* Option b with uri */
                            <Image
                                source={require('./assets/img/64.png')}
                                style={{width: 24, height: 22}}
                            />
                        )
                    },
                }}/>
 <Tab.Screen
                name="Contact"
                component={WellbeingbyActivity}
                options={{
                    tabBarIcon: () => {
                        return (
                            /* Option b with uri */
                            <Image
                                source={require('./assets/img/65.png')}
                                style={{width: 24, height: 22}}
                            />
                        )
                    },
                }}/>
 <Tab.Screen
                name="Settings"
                component={CallsmadevWellbeing}
                options={{
                    tabBarIcon: () => {
                        return (
                            /* Option b with uri */
                            <Image
                                source={require('./assets/img/66.png')}
                                style={{width: 24, height: 22}}
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
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
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
                        name="MessagesSent"
                        component={MessagesSent}/>
                    <Stack.Screen
                        name="ReportforSharing"
                        component={ReportforSharing}/>
                    <Stack.Screen
                        name="WellbeingNetwork"
                        component={WellbeingNetwork}/>
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
                        name="AutoPopulatedMesage1"
                        component={AutoPopulatedMesage1}/>
                    <Stack.Screen
                        name="CareNetworkPage"
                        component={CareNetworkPage}/>
                    <Stack.Screen
                        name="AutoPopulatedMesage2"
                        component={AutoPopulatedMesage2}/>
                    <Stack.Screen
                        name="CallsmadevWellbeing"
                        component={CallsmadevWellbeing}/>
                    <Stack.Screen
                        name="SetUp"
                        component={SetUp}/>
                </Stack.Navigator>
            </NavigationContainer>

        </SafeAreaView>
        </>
    )
}