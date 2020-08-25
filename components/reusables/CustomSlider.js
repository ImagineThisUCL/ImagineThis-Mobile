import React, {
    Component
} from "react"
import {
    StyleSheet,
    View,
    Text,
} from "react-native"
import Slider from '@react-native-community/slider'

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    labelsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
})

/* This is an implementation using the @react-native-community/slider 
which has web support in its @next version (^3.0.0-rc.2). The Slider 
from react-native-elements is more customisable and preferred, 
however does not run on the web.  */

export default class CustomSlider extends Component {
    state = {
        sliderValue: this.props.value,
    }

    render() {
        let labelStyleList = []

        return (
            <View>
                <View style={styles.labelsWrapper}>
                    <Text style={[...labelStyleList, this.props.labelStyle]}>{this.props.minimumValue}</Text>
                    <Text style={[...labelStyleList, this.props.valueLabelStyle]}>{this.state.sliderValue}</Text>
                    <Text style={[...labelStyleList, this.props.labelStyle]}>{this.props.maximumValue}</Text>
                </View>
                <Slider {...this.props} 
                    value={this.state.sliderValue}
                    onValueChange={(sliderValue) => this.setState({ sliderValue })}/>
            </View>
        )
    }
}