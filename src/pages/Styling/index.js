import {React, Component, useState} from "react";
import { View, Image, Text, ScrollView, Touchable, TouchableOpacity } from "react-native";
import FlexBox from "../Flexbox";

const Styling = (props) => {
    return (
          <View style={{
            padding:15,
            backgroundColor:'#e6e6e6',
            width:120,
            margin:10,
            borderRadius:20,
            }}>
            
              <Image source={require('../../assets/images/403_ibrahimovic.jpg')} style={{
                width:90,
                height:100,
                borderRadius:20
              }}/>
              <Text style={{
                fontSize:14,
                fontWeight:'bold',
                color:'#10ac84',
                marginTop:5,
                textAlign:'center'
              }}>Zlatan Ibrahimovic</Text>
              <Text style={{
                fontSize:12,
                textAlign:"center",
                fontWeight:"bold"
              }}>ST</Text>
              <View style={{
                backgroundColor:"green",
                borderRadius:20,
                height:30,
                width:80,
                marginTop:10,
                paddingVertical:5,
                marginLeft:5,
                marginRight:5
              }}>
                <TouchableOpacity onPress={props.onButtonPress}>
                  {/* finding function onButtonPress in props exist or not */}
                  <Text style={{
                  
                    textAlign:"center",
                    alignSelf:"center",
                    color:"white",
                    fontWeight:"bold"
                  
                  }}>Book
                  </Text>
                </TouchableOpacity>
              </View>
              
          </View>
        )
  }

  export default Styling;