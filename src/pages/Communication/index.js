import React, { useState } from 'react'
import { Alert, ScrollView, Text, View } from 'react-native'
import FlexBox from '../Flexbox'
import Styling from '../Styling'

const Communication = () => {
  const [vehicle, setVehicle] = useState(0)
  return (
    <View>
        <FlexBox vehicle={vehicle}/>
        <ScrollView horizontal style={{height:'auto',marginTop:20, backgroundColor:'#f2f2f2', flexDirection:'row'}}>
            <Styling onButtonPress={() => setVehicle(vehicle+1)}/> 
            <Styling onButtonPress={() => setVehicle(vehicle+1)}/> 
            <Styling onButtonPress={() => setVehicle(vehicle+1)}/> 
            <Styling onButtonPress={() => setVehicle(vehicle+1)}/> 
            <Styling onButtonPress={() => setVehicle(vehicle+1)}/> 
            {/* props bisa dalam bentuk function
                jadi dia set state di sini terus trigger nya di dalam komponen STyling
            */}
        </ScrollView>
    </View>
  )
}

export default Communication
