import { 
    StyleSheet, 
    View, 
    Text,
    Button } from "react-native"
import React, { Component } from "react"

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 10,
    backgroundColor: "#11287B"
  },
  p: {
    marginBottom: 20,
    fontSize: 22,
    color: "#f2f2f2"
  },
  buttonWrapper: {
      flexDirection: "row",
      justifyContent: "space-between"
  },
  button: {
      fontSize: 28
  }
})

class SetUp extends Component {
    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.p}>
                    CarerCare V0120-21: Set Up
                </Text>
                <Text style={styles.p}>
                    A carer support worker will have recommended this application to you.  They recognise that carers often forget to look after themselves.  This app has been designed to encourage you to do this.
                </Text>
                <Text style={styles.p}>
                    Occasionally it will nudge you to keep in contact with people you like to speak to, or persue activities with them.  It will also make you aware of new local groups with similar interests to yourself.
                </Text>
                <Text style={styles.p}>
                    If you consent to this click Save.
                </Text>
                <View style={styles.buttonWrapper}>
                    <Button title="No Thanks"/>
                    <Button title="SAVE"/>
                </View>
            </View>
        )
    }
}
export default SetUp