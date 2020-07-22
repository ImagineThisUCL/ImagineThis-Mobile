import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import base from "./assets/baseStyle"
import SetUpView from "./components/views/SetUp"
import SetUpInlineView from "./components/views/SetUpInline"

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
                title="Go to SetUp screen"
                onPress={() => navigation.navigate('SetUp')}
            />
            <Button
                title="Go to SetUp screen with inline styles"
                onPress={() => navigation.navigate('SetUpInline')}
            />
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
