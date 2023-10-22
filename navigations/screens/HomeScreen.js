import { Text, StyleSheet, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import routineData from '../../routineData';
import { GestureHandlerRootView, TouchableOpacity } from 'react-native-gesture-handler';
import ClassCard from '../../components/ClassSchedulePart/ClassCard';
import moment from 'moment/moment';

export default function HomeScreen() {

  const data = routineData

  const [time, setTime] = useState('')
    useEffect(()=>{
        setTime(moment().format('dddd'))
    },[])
    
    console.log(time);


  return (
    <GestureHandlerRootView style={styles.container}>
      <View >
        {data[0].course.map(item => (
          // <Text>{item.name}</Text>
          <ClassCard key={item.code} data={item}></ClassCard>
        ))}

    </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})