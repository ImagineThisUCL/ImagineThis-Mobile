import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { Button } from 'react-native-elements';

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
            // <TouchableOpacity
            //     {...this.props}
            //     style={[...buttonStyleList, this.props.style]}>
            //     // <Image
            //     //     source={require(this.props.iconName)}
            //     //     style={styles.ImageIconStyle}
            //     // />
            // </TouchableOpacity>
        )
    }
}
