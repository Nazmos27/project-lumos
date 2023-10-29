import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import RoomCard from '../../components/ClassSchedulePart/RoomCard'
import classRoomData from '../../classRoomData'
import moment from 'moment/moment'

export default function InfoScreen() {

  const vacantRoomData = classRoomData

  const [time, setTime] = useState('')
  useEffect(() => {
    setTime(moment().format('dddd'))
  }, [])

  const preciseData = vacantRoomData.filter(item => item.day === time.toLowerCase())
  console.log(preciseData);


  return (
    <View style={styles.container}>
      <RoomCard></RoomCard>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    }
})