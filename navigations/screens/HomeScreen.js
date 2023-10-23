import { Text, StyleSheet, View, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import routineData from '../../routineData';
import ClassCard from '../../components/ClassSchedulePart/ClassCard';
import moment from 'moment/moment';

export default function HomeScreen() {

  const data = routineData

  const [time, setTime] = useState('')
  useEffect(() => {
    setTime(moment().format('dddd'))
  }, [])

  // console.log("time", time);
  
  const sessionWiseData = data.filter(item => item.semester === "22")
  console.log("ses",sessionWiseData)

  return (
    
      <ScrollView  style={{flex:1}} >
        
            <View style={{flex:1,zIndex:10,padding:32}}>
              {
                sessionWiseData[0].course.map(classInfo => (
                  
                  <ClassCard key={classInfo.code} data={classInfo} day={time}></ClassCard>
                  

                ))
              }
            </View>

        
      </ScrollView>
    
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