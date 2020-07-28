import React, {
    Component
} from "react"
import {
    StyleSheet,
    TextInput
} from "react-native"

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    TextInput: {
        marginBottom: base.margin,
        paddingHorizontal: base.padding*2,
        paddingVertical: base.padding
    }
})

export default class TextInput extends Component {
    render() {
        let TextInputStyleList = [styles.button]

        return (
            <TextInput
                {...this.props}
                style={[...TextInputStyleList, this.props.style]}>
            </TextInput>
        )
    }
}
