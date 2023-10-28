import { Text, StyleSheet, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import routineData from '../../routineData';
import ClassCard from '../../components/ClassSchedulePart/ClassCard';
import moment from 'moment/moment';

export default function HomeScreen() {

  const data = routineData

  const [time, setTime] = useState('thursday')
  // useEffect(() => {
  //   setTime(moment().format('dddd'))
  // }, [])

  // console.log("time", time);

  const sessionWiseData = data.filter(item => item.semester === "12")
  


  const sortByTimeData = sessionWiseData[0].course
    .filter((course) =>
      course.info.some((classInfo) => classInfo.day === time.toLowerCase())
    )
    .map((course) => ({
      ...course,
      info: course.info.find((classInfo) => classInfo.day === time.toLowerCase()),
    }));


  sortByTimeData.sort((a, b) => {
    const parseTime = (time) => {
      const match = time.match(/(\d+\.\d+)([ap]m)/i);//this is used for spliting 10.30am into "10.30" & "am" string.Notice how it works
        const timeStr = match[1]; 
        const ampm = match[2]; 
        // console.log(timeStr, ampm);
        const [hours, minutes] = timeStr.split(".");
        let totalMinutes = parseInt(hours, 10) * 60 + parseInt(minutes, 10);

        if (ampm === "pm" && totalMinutes < 720) {
          totalMinutes += 720; // Convert to 24-hour format if it's "pm" and not in the afternoon
        }

        return totalMinutes;
      };
      
      return parseTime(a.info.time) - parseTime(b.info.time);
    });





  // console.log("Classes after sort by time", sortByTimeData);






  if (time === 'Friday' || time === 'Saturday') {
    return (
      <TouchableOpacity style={styles.container} >
        <View style={{ justifyContent: 'center', alignItems: 'center' }} >
          <Text>
            No class Today
          </Text>
        </View>
      </TouchableOpacity>
    )
  } else {
    return (

      <ScrollView style={{ flex: 1 }} >

        <View style={{ flex: 1, zIndex: 10, padding: 32 }}>
          {
            sortByTimeData.map(item => <ClassCard data={item}></ClassCard>)
          }
        </View>


      </ScrollView>

    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})