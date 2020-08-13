import React, { Component } from "react"
import { StyleSheet } from "react-native"
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
                type="clear"
            />
        )
    }
}

IconButton.propTypes = {
}