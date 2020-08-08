import React, { Component } from "react"
import { StyleSheet } from "react-native"
import ModalSelector from 'react-native-modal-selector'

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({
    modalText: {
        fontSize: base.font.large,
        color: "#000000"
    },
    modalContainer: {
        backgroundColor: "#f2f2f2",
        borderRadius: base.borderRadius
    },
    cancelText: {
        fontSize: base.font.large,
        color: "#5555ff"
    },
    initText: {
        color: "#8d8d8d"
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
            textStyle,
            containerStyle,
        } = this.props

        return (
            <ModalSelector
                data={items}
                initValue="Please select"
                selectStyle={containerStyle}
                selectTextStyle={textStyle}
                initValueTextStyle={[textStyle, styles.initText]}
                optionTextStyle={styles.modalText}
                optionContainerStyle={styles.modalContainer}
                cancelTextStyle={styles.cancelText}
                cancelStyle={styles.modalContainer}
                cancelText="Cancel" />
        )
    }
}
