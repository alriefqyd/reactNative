import React, { Component } from "react";
import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CustomComponent from './pages/CustomComponent';
import Styling from "./pages/Styling";
import FlexBox from "./pages/Flexbox";
import Position from "./pages/Position";
import PropsComponent from "./pages/PropsComponent";
import StateDinamis from "./pages/StateDinamis";
import Communication from "./pages/Communication";

const App = () => {
  return (
    <View>
      <ScrollView>
        {/* <Styling/>
        <Position/>
        <CustomComponent/> */}
        {/* <PropsComponent/> */}
        {/* <StateDinamis/> */}
        {/* <FlexBox/> */}
        <Communication></Communication>
      </ScrollView>
    </View>
    
  )
}

export default App;
