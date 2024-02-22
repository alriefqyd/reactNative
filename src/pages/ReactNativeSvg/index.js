import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Svg, { Circle, Rect, SvgXml } from 'react-native-svg';
import Plane from '../../assets/icons/plane.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
    
      <Plane height={200} width={200}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ReactNativeSvg;