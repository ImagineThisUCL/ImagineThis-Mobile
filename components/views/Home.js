import { View, StyleSheet, Text } from "react-native"
import React, { Component } from "react"
import Button from "../reusables/Button"
import { StatusBar } from 'expo-status-bar'

import base from "../../assets/baseStyle"

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

class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View>
                    <Text style={styles.text}>
                        Welcome to the home screen of our testing app.
                    </Text>
                </View>
                <Button
                    onPress={() => this.props.navigation.navigate('SetUp')}
                    style={{backgroundColor: "#5555ff", borderRadius: 25, marginTop: base.margin}}
                    textStyle={{color: "#ffffff"}}>
                    Go to SetUp screen
                </Button>
                <Button
                    onPress={() => this.props.navigation.navigate('SetUpInline')}
                    style={{backgroundColor: "#5555ff", borderRadius: 25, marginTop: base.margin}}
                    textStyle={{color: "#ffffff"}}>
                    Go to SetUp screen with inline styles
                </Button>
                <Button
                    onPress={() => this.props.navigation.navigate('SetUpComponents')}
                    style={{backgroundColor: "#5555ff", borderRadius: 25, marginTop: base.margin}}
                    textStyle={{color: "#ffffff"}}>
                    Go to SetUp screen with components
                </Button>
            </View>
        )
    }
}
export default Home