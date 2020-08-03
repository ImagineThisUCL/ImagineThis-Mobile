import React, { Component } from 'react';
import { Text, View } from 'react-native';

class SetUp extends Component {
    render() {
        return (
            <View>
                <Text>The redirected page has not been converted yet</Text>
                <Text>This might be because you haven't select it on the code convert page</Text>
                <Text>or because this page does not exist.</Text>
            </View>
        )
    }
}
export default SetUp
