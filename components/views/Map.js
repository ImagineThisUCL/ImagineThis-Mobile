import { View, ScrollView, StyleSheet, TouchableOpacity , Text, Dimensions} from "react-native"
import React, { Component } from "react"
import P from "../reusables/P"

import Button from "../reusables/Button"

import GoogleMap from "../reusables/GoogleMap"


import base from "../../assets/baseStyle"


export default class Map extends React.Component {
  render() {
    return (
      <ScrollView style={{flex: 1, padding: 10, backgroundColor: "#11287B"}}>
      <P style={{color: "#ffffff", fontSize: 21, fontWeight:"600"}}>
          Initially,please set up your data sharing preferences with a carer support worker
      </P>
      <View style={{padding: 10, backgroundColor: "#ffffff", borderRadius: 10, marginBottom: 10, alignItems:"center"}}>
          <Button
              style={{alignSelf:"center",backgroundColor: "#ffffff", borderRadius: 25, marginTop: base.margin}}
              textStyle={{color: "#147EFB", fontWeight: "bold"}}>
              Start tracking
          </Button>
          <P style={{color: "#000000", fontSize: 15,fontWeight:"400",textAlign:"center"}}>
              When you click the above botton the App will enable you to keep a weekly record of your well-being and allow you to understand  the importance of social cotact & movement in your life
          </P>
      </View>
      <View style={{padding: 5, backgroundColor: "#11287B", borderRadius: 10,borderColor:'grey',borderWidth: 1,flexDirection: "row"}}>
      <View style={{padding: 5, backgroundColor: "#11287B", borderRadius: 10, width:220}}>
          <P style={{color: "#ffffff", fontSize: 16,fontWeight:"600", textAlign:"center"}}>
            Click the OK button below to consent to the creation of a map that enables you and other app users to understand what support activities help people in your area.By consenting you will not be sharing personally identifiable data.All data used to create the map will be annonymised to protect your privacy.
            </P>
      </View>
      <View style={{padding: 10, backgroundColor: "#11287B", borderRadius: 10, marginTop: 30, width:120, alignItems:"center"}}>
        <GoogleMap />
      </View>
      </View>
      <View style={{flexDirection: "row", justifyContent: "space-between"}}>
          <Button
              style={{backgroundColor: "#ffffff", borderRadius: 25, marginTop: base.margin}}
              textStyle={{color: "#147EFB", fontWeight: "bold"}}>
              No Thanks
          </Button>
          <Button
              style={{backgroundColor: "#ffffff", borderRadius: 25, marginTop: base.margin}}
              textStyle={{color: "#147EFB", fontWeight: "bold"}}>
              Save
          </Button>
      </View>
      </ScrollView>
  );
  }
}
