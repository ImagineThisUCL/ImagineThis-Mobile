import React, { Component } from "react"
import { StyleSheet } from "react-native"
import { Button } from 'react-native-elements';

import base from "../../assets/baseStyle"
import { Switch } from "react-native-gesture-handler";

const styles = StyleSheet.create({
    toggle: {
        flex: 1
    },
    continaer: {
        flex: 1,
        flexDirection: "row",
    }
})

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
          toggle: false,
        };
    }

    render() {

        return (
            <Switch
                {...this.props} 
                onValueChange={(value) => this.setState({toggle: value})}
                value={this.state.toggle}
            />  
        )
    }
}
