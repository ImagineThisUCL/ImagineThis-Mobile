import React, {
    Component
} from "react"
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from "react-native"

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    button: {
        marginBottom: base.margin,
        paddingHorizontal: base.padding*2,
        paddingVertical: base.padding
    },
    text: {
        fontSize: base.font.medium
    }
})

export default class Button extends Component {
    render() {
        let buttonStyleList = [styles.button]
        let textStyleList = [styles.text]

        return (
            <TouchableOpacity 
                {...this.props} 
                style={[...buttonStyleList, this.props.style]}>
                <Text
                    style={[...textStyleList, this.props.textStyle]}>
                    {this.props.children}
                </Text>
            </TouchableOpacity>
        )
    }
}