import { Text, StyleSheet, View, ScrollView, FlatList, TouchableOpacity, TextInput,  } from 'react-native'
import React, { useState, useEffect } from 'react'
import routineData from '../../routineData';
import ClassCard from '../../components/ClassSchedulePart/ClassCard';
import moment from 'moment/moment';
import { Picker } from '@react-native-picker/picker';
import IntroCompo from '../../components/IntroCompo';

export default function HomeScreen() {

  const data = routineData

  const [semesterInfo,setSemesterInfo] = useState('12')
  const [time, setTime] = useState('')
  useEffect(() => {
    setTime(moment().format('dddd'))
  }, [])

  // console.log("time", time);

  const handleOptionChange = (value) =>{
    setSemesterInfo(value);
    console.log(semesterInfo);
  }

  const sessionWiseData = data.filter(item => item.semester === semesterInfo)
  
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

      <ScrollView style={{ flex: 1 ,backgroundColor:"#E4F1FF"}} >
        <View>
          <IntroCompo></IntroCompo>
        </View>
        <View>
          <Text style={{marginHorizontal:20,marginVertical:10,fontSize:20,fontWeight:"800"}}>Select Your Semester</Text>
          <Picker style={{backgroundColor: "#BEADFA", marginHorizontal:20}} onValueChange={handleOptionChange} selectedValue={semesterInfo} dropdownIconColor="green" >
            <Picker.Item label='1st year, 2nd semester' value={"12"}/>
            <Picker.Item label='2nd year, 2nd semester' value={"22"}/>
            <Picker.Item label='3rd year, 2nd semester' value={"32"}/>
          </Picker>
        </View>
        <View style={{ flex: 1, padding: 32 }}>
          {
            sortByTimeData.map(item => <ClassCard key={item.code} data={item}></ClassCard>)
          }
        </View>
        
      </ScrollView>

    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5B0888',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputArea:{
    width:'90%',
    height:50,
    borderRadius:8,
    marginTop:40,
    fontSize:16,
    borderColor: "black",
    borderWidth: 2,
    alignSelf:'center',
    padding:10
  }
})