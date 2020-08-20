import { View, ScrollView, Image } from "react-native"
import React, { Component } from "react"
import base from "../../assets/baseStyle"
import P from '../reusables/P'
import ImageButton from "../reusables/ImageButton"

class CFAMenu extends Component {render() {
        return (
            <ScrollView style={{flex: 1, padding: 10, backgroundColor: "rgba(255,255,255,1.0)"}}>
<View style={{marginTop: 33}}>
<View style={{borderRadius: 0.0 , margin: 0, padding: 10, backgroundColor: "rgba(0,0,0,0)"}}>
<View style={{flexDirection: 'row', marginTop: 0}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 24, height: 14}}
imageSrc={require('../../assets/img/1.png')}/>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 115}}>
<View style={{flex: 1}}>
<Image
source={require('../../assets/img/2.png')}
style={{width: 40, height: 40}}
/>
</View>
<View style={{flex: 5}}>
<P style={{fontSize: 20.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Capi Creative Design</P>
</View>
</View>
<View style={{flexDirection: 'row', marginTop: 0}}>
<P style={{fontSize: 16.0, color: "rgba(255,255,255,1.0)", textAlign: 'left'}}>Profile</P>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 53}}>
<View style={{flex: 3}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 105, height: 105}}
imageSrc={require('../../assets/img/3.png')}/>
</View>
<View style={{flex: 3}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 105, height: 105}}
imageSrc={require('../../assets/img/4.png')}/>
</View>
<View style={{flex: 3}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 105, height: 105}}
imageSrc={require('../../assets/img/5.png')}/>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 17}}>
<View style={{flex: 3}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 105, height: 105}}
imageSrc={require('../../assets/img/6.png')}/>
</View>
<View style={{flex: 3}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 105, height: 105}}
imageSrc={require('../../assets/img/7.png')}/>
</View>
<View style={{flex: 3}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 105, height: 105}}
imageSrc={require('../../assets/img/8.png')}/>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 16}}>
<View style={{flex: 3}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 105, height: 105}}
imageSrc={require('../../assets/img/9.png')}/>
</View>
<View style={{flex: 3}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 105, height: 105}}
imageSrc={require('../../assets/img/10.png')}/>
</View>
<View style={{flex: 3}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 105, height: 105}}
imageSrc={require('../../assets/img/11.png')}/>
</View>
</View>
<View style={{flexDirection: 'row', justifyContent: "space-between", marginTop: 17}}>
<View style={{flex: 3}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 105, height: 105}}
imageSrc={require('../../assets/img/12.png')}/>
</View>
<View style={{flex: 3}}>
<ImageButton
style={{padding: 10}}
imageStyle={{width: 105, height: 105}}
imageSrc={require('../../assets/img/13.png')}/>
</View>
</View>
</View>

</View>
            </ScrollView>
        )
    }
}
export default CFAMenu