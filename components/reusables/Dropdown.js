import React, { Component } from "react"
import { StyleSheet } from "react-native"
import {Picker} from '@react-native-community/picker'

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    box: {
        padding: 5
    },
})

export default class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            selected: this.props.selectedValue 
        }
    }

    render() {
        const {
            items,
            style,
        } = this.props

        let boxStyleList = [styles.box]

        return (
            <Picker
                selectedValue={this.state.selected}
                onValueChange={(itemValue) =>
                    this.setState({selected: itemValue})
                }
                style={[...boxStyleList, style]}>
                {items.map((item, index) =>
                    <Picker.Item 
                        label={item.label} 
                        value={item.value} 
                        key={index} />
                )}
            </Picker>
        )
    }
}
