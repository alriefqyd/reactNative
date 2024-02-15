import React, { Component } from "react";
import {StyleSheet, View, Text, TextInput, Image  } from "react-native";


const CustomComponent = () => {
    return (
      <View>
        <Photo/>
        <Text style={styles.text}>Hello World</Text>
        <Home></Home>
        <TextInput style={{borderWidth:1}}/>
        <BoxGreen/>
        <BoxGreen/>
        {/* <BoxGreen/> */}
        {/* <BoxGreen/> */}
      </View>
    )
  }
  
  const Home = () => {
    return <Text>Home Page</Text>
  }
  
  const Photo = () => {
    return( 
    <View>
      <Image 
      source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png'}}
      style={{width:100, height:100}}
      />
      <Text>image tag</Text>
    </View>
    )
  }
  
  class BoxGreen extends Component {
    render(){
      return (
        <View>
          <Text>BoxGreen</Text>
          <Image 
          source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png'}}
          style={{width:100, height:100}}
          />
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    text : {
      fontSize : 18,
      color: "red",
      marginLeft:10,
      marginTop:10
    }
  })

  export default CustomComponent;