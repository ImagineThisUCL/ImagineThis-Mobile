import { View, StyleSheet, Text } from "react-native"
import React, { Component } from "react"
import { StatusBar } from 'expo-status-bar'
import Button from "../reusables/Button"

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

export default class Wellbeing extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Text style={styles.text}>
                    Wellbeing view
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('WeeklyConfirmWellbeing')}
                    style={{backgroundColor: "#5555ff", borderRadius: 25, marginTop: base.margin}}
                    textStyle={{color: "#ffffff"}}>
                    Go to Weekly Confirm Wellbeing
                </Button>
                <Button
                    onPress={() => this.props.navigation.navigate('ReportForSharing')}
                    style={{backgroundColor: "#5555ff", borderRadius: 25, marginTop: base.margin}}
                    textStyle={{color: "#ffffff"}}>
                    Go to Report for Sharing
                </Button>
            </View>
        )
    }
}
