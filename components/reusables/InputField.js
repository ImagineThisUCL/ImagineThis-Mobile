import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { Input } from "react-native-elements";

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    input: {
        flexDirection: "row"
    },
})

export default class InputField extends Component {
    render() {

        let inputStyleList = [styles.input]

        return (
            <Input
                style={[...inputStyleList, this.props.style]}
                {...this.props}
            />
        )
    }
}