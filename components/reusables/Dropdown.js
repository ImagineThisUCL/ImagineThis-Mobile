import React, { Component } from "react"
import { StyleSheet } from "react-native"
import ModalSelector from 'react-native-modal-selector'
import propTypes from 'prop-types'

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
    rootContainer: {
        flex: 1,
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
                selectedKey={items[0].key}
                selectStyle={containerStyle}
                style={styles.rootContainer}
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

Dropdown.propTypes = {
    items: propTypes.array.isRequired, // requires dropdown options
    textStyle: propTypes.object, // input box text style
    containerStyle: propTypes.object, // input box container style
    /* 
        Other props are set directly in this file - for more information, please
        refer to react-native-modal-selector documentation
    */
}
