import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native'

export default PropsComponent = props => {
  return (
    <View>
      <Text>Cek</Text>
      <ScrollView horizontal>
      <View style={{flexDirection:'row'}}>
        <Story name="Story Lorem Ipsum" image="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=800"></Story>
        <Story name="Story 2" image="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=800"></Story>
        <Story name="Story 3" image="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=800"></Story>
        <Story name="Story 4" image="https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=800"></Story>
        <Story name="Story 5" image="https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=800"></Story>
        <Story name="Story 6" image="https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg?auto=compress&cs=tinysrgb&w=800"></Story>
        <Story name="Story 7" image="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=800"></Story>
        <Story name="Story 8" image="https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=800"></Story>
      </View>
      </ScrollView>
     
    </View>
    
  )
}

const Story = (props) => {
    return (
          <View style={{alignItems:'center', marginRight:20}}>
              <Image source={{uri:props.image}} style={{width:50, height:50, borderRadius:25}}/>
              <Text style={{maxWidth:50,textAlign:'center'}}>{props.name}</Text>
          </View>
    )
}
