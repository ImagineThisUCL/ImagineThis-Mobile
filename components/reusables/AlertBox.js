import React, {
    Component
} from "react"
import {
    StyleSheet,
    Text,
    View,
} from "react-native"


import Button from "../reusables/Button"

import base from "../../assets/baseStyle"

const styles = StyleSheet.create({

    contentWrapper:{
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      padding: 5,
      marginVertical: 10,
   },
   bottomWrapper:{
     flexDirection: "row",
     justifyContent: "space-between",
     padding: 5,
   },

   contentTextStyle:{
     fontSize: base.font.large,
     textAlign: "center",
   },


 })


   export default class AlertBox extends Component {
       render() {

         let contentTextStyle= [styles.contentTextStyle]

         return(

           <View>
             <View style={styles.contentWrapper}>
               <Text
                 style={[...contentTextStyle, this.props.textStyle]}>
                 {this.props.children}
               </Text>
             </View>
             <View style={styles.bottomWrapper}>
                <Button
                   onPress={() => alert("YES")}
                   textStyle={{color:"#f11c30"}}>
                    YES
                </Button>
                <Button
                   onPress={() => alert("NO")}
                   textStyle={{color:"#579821"}}>
                    NO
                </Button>


        </View>
        </View>


         )

   }
 }
