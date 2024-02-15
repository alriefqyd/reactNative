import { React, Component, useState, useEffect } from "react";
import { Image, Text, View } from "react-native";
import Position from "../Position";

// class FlexBox extends Component{

//     // react life cycle
//     // 1. constructor
//     // 2. render
//     // 3. componendidmount 
//     constructor(props){
//         super(props)
//         console.log('constructor')
//     }

//     componentDidMount(){ // kalau component sudah muncul 
//         console.log('did mount')
//     }

//     render(){
//         console.log('render')
//         return (
//             <View>
//                 {/* // space-between => no margin, all px is used
//                 // space-around => with margin start and end */}
//                 <View style={{flexDirection:'row', backgroundColor:'grey', alignItems:'flex-end', justifyContent:'space-between'}}>
//                     <View style={{backgroundColor:'#ee5253', width:60, height:50}}></View>
//                     <View style={{backgroundColor:'#feca57', width:60, height:50}}></View>
//                      <View style={{backgroundColor:'#1dd1a1', width:60, height:50}}></View>
//                     <View style={{backgroundColor:'#5f27cd', width:60, height:50}}></View>
//                 </View>
//                 <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'space-around', marginTop:10}}>
//                     <Text>Home</Text>
//                     <Text>Vehicle</Text>
//                     <Text>Taxi</Text>
//                     <Text>Log</Text>
//                 </View>
//                 <View style={{marginTop:20, flexDirection:'row', alignItems:'center'}}>
//                     <Image source={require('../../assets/images/403_ibrahimovic.jpg')} style={{width:100, height:100, borderRadius:50, marginRight:10}}></Image>
//                     <View>
//                         <Text style={{fontSize:16, fontWeight:'bold'}}>Zlatan Ibrahimovic</Text>
//                         <Text>Striker</Text>
//                     </View>
//                 </View>
//             </View>
            
//         )
//     }
// }

// export default FlexBox

const FlexBox = (props) => {
    const [followers, setFollowers] = useState('200K');
    useEffect(() => {
        console.log('did mount');
        setTimeout(() => {
            setFollowers('400K')
        },2000)
        return () => { // function run if updated state
            console.log('update')
        }
    }, [followers])
            return (
                <View>
                    {/* // space-between => no margin, all px is used
                    // space-around => with margin start and end */}
                    {/* <View style={{flexDirection:'row', backgroundColor:'grey', alignItems:'flex-end', justifyContent:'space-between'}}>
                        <View style={{backgroundColor:'#ee5253', width:60, height:50}}></View>
                        <View style={{backgroundColor:'#feca57', width:60, height:50}}></View>
                            <View style={{backgroundColor:'#1dd1a1', width:60, height:50}}></View>
                        <View style={{backgroundColor:'#5f27cd', width:60, height:50}}></View>
                    </View> */}
                    <View style={{flexDirection:'row', alignItems:'flex-start', justifyContent:'space-around', marginTop:10}}>
                        <Text>Home</Text>
                        <Text>Vehicle</Text>
                        <Text>Taxi</Text>
                        <Text>Log</Text>
                    </View>
                    <View style={{justifyContent:'space-around', flexDirection:'row'}}>
                        <View style={{margin:20, flexDirection:'row', alignItems:'center'}}>
                        <Image source={require('../../assets/images/403_ibrahimovic.jpg')} style={{width:80, height:80, borderRadius:50, marginRight:10}}></Image>
                            <View>
                                <Text style={{fontSize:16, fontWeight:'bold'}}>Zlatan Ibrahimovic</Text>
                                <Text>Striker {followers}</Text>
                            </View>
                        </View>
                        <Position vehicle={props.vehicle}/>
                    </View>
                </View>
                    
            )
}

export default FlexBox