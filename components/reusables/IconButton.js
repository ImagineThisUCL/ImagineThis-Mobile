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

/*
 * A clickable IconButton with native animations
 *
 * (An alternative to ImageButton with animated opacity)
*/

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
    // props for react-native-elements Button
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
    type: propTypes.oneOf(['solid', 'clear', 'outline']),
}