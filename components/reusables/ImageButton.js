import React, {
    Component
} from "react"
import {
    StyleSheet,
    Image,
    TouchableOpacity,
    View,
} from "react-native"

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
    },
})

export default class Button extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <TouchableOpacity 
                    {...this.props} 
                    style={this.props.style}>
                    <Image
                        style={this.props.imageStyle}
                        source={this.props.imageSrc}>
                    </Image>
                </TouchableOpacity>
            </View>
        )
    }
}