import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import FancyBox from '@/components/FancyBox';

export default function HomeScreen() {
  const [text, setText] = useState('hello ');
  const [counter, setCount] = useState(0);
  return (
   
    <View
    style={{
     backgroundColor:'lightblue',
      flex:1,
      
    }}>
    <View style={{backgroundColor: 'yellow', height:150, flexDirection:'row'}}>

          <View style={{backgroundColor: 'blue', flex:1}} />
          <View style={{backgroundColor: 'red', flex:1}} />
          <View style={{backgroundColor: 'white', flex:1}} />
          <View style={{backgroundColor: 'green', flex:1}} />
          

    </View>
   <View style={{backgroundColor:'pink', height:50, justifyContent:'center', alignItems:'center'}}>
    <Text>Hello World!</Text>
    
    </View>
    <View style={{flex: 1 , justifyContent:'center', alignItems:'center'}}>
    <FancyBox/>
      <Text style={{fontSize:60, color:'white'}}>{counter}</Text>
      </View>
    
   <View style={{backgroundColor:'red', height:50, bottom:0}}>
    
   <Button onPress={() => {
    setText('Yeaaaaaaa')
    console.log('btn clicked')
    setCount(counter + 1)
   }} title='Tryck här'></Button>
   </View>
  </View>
      
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007bff', // Example background color
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
