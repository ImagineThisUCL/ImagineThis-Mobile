import React, {
    Component
} from "react"
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native"

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
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
            <View style={styles.container}>
                <View style={styles.top} />
            </View>
        )
    }
}
