import { Image, StyleSheet, Platform, View, Text, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';
import FancyBox from '@/components/FancyBox';
import Box from '@/components/Box';

export default function HomeScreen() {
  const [text, setText] = useState('hello ');
  const [counter, setCount] = useState(0);
  return (
   
    <View
    style={{
     backgroundColor:'lightblue',
      flex:1,
      
    }}>
    <View style={{
      backgroundColor: 'red', 
      height:150, margin:5, 
      flexDirection:'row', 
      justifyContent: 'center', 
      alignItems: 'center', 
      borderTopLeftRadius: 50,   // Rounded top-left corner
      borderTopRightRadius: 50, 
      paddingTop:20 // Rounded top-right corner
      }}>
      <Text style={{fontSize:60, color:'black'}}>RÖD</Text>
    </View>

    <View style={{backgroundColor: 'transparent', margin: 5, height:150, flexDirection:'row'}}> 
        <View style={{backgroundColor: 'green', marginRight: 5, padding:10, flex:1}} >
             <Text style={{fontSize:60, color:'black'}}>GRÖN</Text>
          </View>
        <View style={{backgroundColor: 'yellow', flex:1}} />
    </View>

    <View style={{backgroundColor: 'transparent', height:80,margin: 5, flexDirection:'row'}}>
       <View style={{backgroundColor: 'red', marginRight: 5, flex:2.5}} ></View>
       <View style={{backgroundColor: 'black', flex:1}} />
    </View>

   <Box/> 

   <View style={{
    backgroundColor:'orange', 
    height:60, 
    margin: 5, 
    justifyContent: 'center', alignItems: 'flex-end'
    }}>
      <Text style={{fontSize:40, padding:10, color:'black'}}>ORANGE</Text> 
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
