import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { Input } from "react-native-elements";
import propTypes from 'prop-types'

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

InputField.propTypes = {
    // props for core TextInput 
    placeholder: propTypes.string,

    // props for input from react-native-elements
    containerStyle: propTypes.object,
    disabled: propTypes.bool,
    disabledInputStyle: propTypes.object,
    inputContainerStyle: propTypes.object,
    errorMessage: propTypes.string,
    errorStyle: propTypes.object,
    inputStyle: propTypes.object,
    label: propTypes.string,
    labelStyle: propTypes.object,
    leftIcon: propTypes.object, // not sure
    leftIconContainerStyle: propTypes.object,
    rightIcon: propTypes.object, // not sure
    rightIconContainerStyle: propTypes.object,
}