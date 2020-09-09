import React, { Component } from "react"
import propTypes from 'prop-types'
import { Switch } from "react-native"

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

Toggle.propTypes = {
    // prop types for react-native Switch
    disabled: propTypes.bool,
    ios_backgroundColor: propTypes.string,
    onChange: propTypes.func,
    onValueChange: propTypes.func,
    thumbColor: propTypes.string,
    trackColor: propTypes.object,
    value: propTypes.bool,
}
