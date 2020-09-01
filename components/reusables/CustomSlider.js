import React, {
    Component
} from "react"
import {
    StyleSheet,
    View,
    Text,
} from "react-native"
import Slider from '@react-native-community/slider'
import propTypes from 'prop-types'

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    labelsWrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    sliderWrapper: {
        flexDirection: "column",
        flexGrow: 1,
    },
})

/*
 * A Slider reusable supporting any range of numbers
 *
 * This is an implementation using the @react-native-community/slider 
 * which has web support in its @next version (^3.0.0-rc.2). The Slider 
 * from react-native-elements is more customisable, however does
 * not run on the web. Feel free to use any of the two 
 * (simply swap the import).
*/

export default class CustomSlider extends Component {
    state = {
        sliderValue: this.props.value,
    }

    render() {
        let labelStyleList = []

        return (
            <View style={styles.sliderWrapper}>
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

CustomSlider.propTypes = {
    minimumValue: propTypes.number.isRequired,
    maximumValue: propTypes.number.isRequired,
    value: propTypes.number.isRequired,
    step: propTypes.number, // default is 1
    minimumTrackTintColor: propTypes.string, // track color for left side
    maximumTrackTintColor: propTypes.string, // track color for right side
    thumbTintColor: propTypes.string, // color of drag element
    labelStyle: propTypes.object, // style object for min/max labels
    valueLabelStyle: propTypes.object, // style object for value label
    /* 
     *  For other props please refer to @react-native-community/slider documentation
    */
}
