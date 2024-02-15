import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Position = props => {
  return (
    <View style={styles.card}>
      <View style={styles.circle}>
          <Image source={require('../../assets/icons/car.png')} style={styles.image}></Image>
          <Text style={styles.count}>{props.vehicle}</Text>
      </View>
      <Text style={{marginTop:5}}>Vehicle Available</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   image : {
    width:50,
    height:50,

   },
   circle : {
    height:50,
    width:50,
    borderRadius:50,
    backgroundColor:'grey',
    justifyContent:'center',
    alignItems:'center'
   },
  card : {
    marginTop:30,
    alignItems:'center',
    position:'relative'
  },
  count : {
    width:30,
    height:30,
    borderRadius:15,
    backgroundColor:'green',
    fontSize:10,
    padding:7,
    fontWeight:'bold',
    position:'absolute',
    right:-10,
    top:-10
    
  }
  })

  export default Position;