import React, {
    Component
} from "react"
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native"
import propTypes from 'prop-types'

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    button: {
        marginBottom: base.margin,
        paddingHorizontal: base.padding*2,
        paddingVertical: base.padding,
    },
    circleButton: {
        marginBottom: base.margin,
        padding: base.padding,
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: base.font.medium,
        textAlign: "center",
    },
    wrapper: {
        flexDirection: "row",
    },
})

/*
 * A classic button with text inside
*/
export default class Button extends Component {
    render() {
        const {
            circleDiameter,
            style,
            textStyle,
            children,
        } = this.props

        let buttonStyleList = []
        if (this.props.circleDiameter) {
            buttonStyleList = [styles.circleButton, {width: circleDiameter}, {height: circleDiameter}, {borderRadius: circleDiameter}, style]
        } else {
            buttonStyleList = [styles.button, style]
        }

        let textStyleList = [styles.text, textStyle]

        return (
            <View style={styles.wrapper}>
                <TouchableOpacity 
                    {...this.props} 
                    style={buttonStyleList}>
                    <Text
                        style={textStyleList}>
                        {children}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

Button.propTypes = {
    children: propTypes.node.isRequired, // button needs some content
    onPress: propTypes.func,
    style: propTypes.object, // container style
    textStyle: propTypes.object, // text style
    circleDiameter: propTypes.number, // create circular button with diameter
}
