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
    text: {
        fontSize: base.font.medium,
    },
    wrapper: {
        flexDirection: "row",
    },
})

export default class Button extends Component {
    render() {
        let buttonStyleList = [styles.button]
        let textStyleList = [styles.text]

        return (
            <View style={styles.wrapper}>
                <TouchableOpacity 
                    {...this.props} 
                    style={[...buttonStyleList, this.props.style]}>
                    <Text
                        style={[...textStyleList, this.props.textStyle]}>
                        {this.props.children}
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
}
