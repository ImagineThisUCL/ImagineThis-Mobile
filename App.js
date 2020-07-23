import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import base from "./assets/baseStyle"
import SetUpView from "./components/views/SetUp"
import SetUpInlineView from "./components/views/SetUpInline"
import SetUpComponentsView from "./components/views/SetUpComponents"
import Button from "./components/reusables/Button"

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View>
                <Text style={styles.text}>
                    Welcome to the home screen of our testing app.
                </Text>
            </View>
            <Button
                onPress={() => navigation.navigate('SetUp')}
                style={{backgroundColor: "#5555ff", borderRadius: 25, marginTop: base.margin}}
                textStyle={{color: "#ffffff"}}>
                Go to SetUp screen
            </Button>
            <Button
                onPress={() => navigation.navigate('SetUpInline')}
                style={{backgroundColor: "#5555ff", borderRadius: 25, marginTop: base.margin}}
                textStyle={{color: "#ffffff"}}>
                Go to SetUp screen with inline styles
            </Button>
            <Button
                onPress={() => navigation.navigate('SetUpComponents')}
                style={{backgroundColor: "#5555ff", borderRadius: 25, marginTop: base.margin}}
                textStyle={{color: "#ffffff"}}>
                Go to SetUp screen with components
            </Button>
        </View>
    )
}

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="SetUp" component={SetUpView} />
                <Stack.Screen name="SetUpInline" component={SetUpInlineView} />
                <Stack.Screen name="SetUpComponents" component={SetUpComponentsView} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginBottom: 20,
        fontSize: 20,
        textAlign: "center"
    }
})
