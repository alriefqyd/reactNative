import React, { Component } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CustomComponent from './pages/CustomComponent';
import Styling from "./pages/Styling";
import FlexBox from "./pages/Flexbox";
import Position from "./pages/Position";
import PropsComponent from "./pages/PropsComponent";
import StateDinamis from "./pages/StateDinamis";
import Communication from "./pages/Communication";
import ReactNativeSvg from "./pages/ReactNativeSvg";
import RespnAPi from "./pages/ResponApi";
import ResponAPi from "./pages/ResponApi";
import Axios from "./pages/Axios";

const App = () => {
  console.log('ad');
  return (
    <View>
      <ScrollView>
        {/* <Styling/>
        <Position/>
        <CustomComponent/> */}
        {/* <PropsComponent/> */}
        {/* <StateDinamis/> */}
        {/* <FlexBox/> */}
        {/* <Communication/>
        <ReactNativeSvg/> */}
        <Axios/>
      </ScrollView>
    </View>
    
  )
}

export default App;
