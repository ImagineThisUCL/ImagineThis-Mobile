import React, { Component } from "react"
import { StyleSheet, ViewPropTypes, TextPropTypes, ActivityIndicator } from "react-native"
import { Button, Icon } from 'react-native-elements';
import propTypes from 'prop-types'

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    button: {
        flex: 1
    },
})

export default class IconButton extends Component {
    render() {
        let buttonStyleList = [styles.button]

        return (
            <Button
                {...this.props}
                style={[...buttonStyleList, this.props.style]}
            />
        )
    }
}

IconButton.defaultProps = {
    type: 'clear'
  };

IconButton.propTypes = {
    // props for button from react-native-elements
    buttonStyle: propTypes.object,
    containerStyle: propTypes.object,
    disabled: propTypes.bool,
    disabledStyle: propTypes.object,
    disabledTitleStyle: propTypes.object,
    iconContainerStyle: propTypes.object,
    iconRight: propTypes.bool,
    loading: propTypes.bool,
    loadingStyle: propTypes.object,
    onPress: propTypes.func,
    raised: propTypes.bool,
    title: propTypes.string,
    titleStyle: propTypes.object,
    // type: 
}