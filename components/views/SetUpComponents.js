import { View } from "react-native"
import React, { Component } from "react"
import P from "../reusables/P"
import Button from "../reusables/Button"

import base from "../../assets/baseStyle"

class SetUpComponents extends Component {
    render() {
        return (
            <View style={{flex: 1, padding: 10, backgroundColor: "#11287B"}}>
                <P style={{color: "#ffffff", fontSize: 21}}>
                    CarerCare V0120-21: Set Up
                </P>
                <P style={{color: "#ffffff", fontSize: 21}}>
                    A carer support worker will have recommended this application to you.  They recognise that carers often forget to look after themselves.  This app has been designed to encourage you to do this.{"\n\n"}
                    Occasionally it will nudge you to keep in contact with people you like to speak to, or persue activities with them.  It will also make you aware of new local groups with similar interests to yourself.
                </P>
                <P style={{color: "#ffffff", fontSize: 21}}>
                    Occasionally it will nudge you to keep in contact with people you like to speak to, or persue activities with them.  It will also make you aware of new local groups with similar interests to yourself.
                </P>
                <P style={{color: "#ffffff", fontSize: 21}}>
                    If you consent to this click Save.
                </P>
                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                    <Button
                        style={{backgroundColor: "#5555ff", borderRadius: 25, marginTop: base.margin}}
                        textStyle={{color: "#ffffff"}}>
                        No Thanks
                    </Button>
                    <Button
                        style={{backgroundColor: "#5555ff", borderRadius: 25, marginTop: base.margin}}
                        textStyle={{color: "#ffffff"}}>
                        Save
                    </Button>
                </View>
            </View>
        )
    }
}
export default SetUpComponents