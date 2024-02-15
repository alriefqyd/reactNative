import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

const StateDinamis = () => {
    return (
        <View>
            <Count></Count>
            <Count></Count>
        </View>
   
    )
}


const Count = () => {
    const [number, setNumber] = useState(0)  
    return (
        <View style={{margin:10}}>
            <Text>{number}</Text>
           <Button title="Add" onPress={ () => setNumber(number+1)}></Button>
        </View>
      )
}

export default StateDinamis
