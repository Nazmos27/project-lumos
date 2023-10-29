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
      <View>
        {
          preciseData[0].r917.length > 0 ? preciseData[0].r917.map(e => <View style={{alignItems:'center',backgroundColor: "#5CD859",padding:20,width:300}}>
            <Text style={{color:"white",fontWeight:"700"}}>Room NO 917 is vacant today from</Text>
            <Text style={{color:"white",fontWeight:"700"}}>{e}</Text>
            </View>) 
            : 
            <Text style={{width:300,borderColor:"black",borderWidth:2, padding:20,textAlign:'center',backgroundColor:"#D85963",color:"white",fontWeight:"800"}}>This classroom is not vacant today...There will be classes as per schedule</Text>
        }
      </View>
      <View>
        {
          preciseData[0].r916.length > 0 ? preciseData[0].r916.map(e => <View style={{alignItems:'center',backgroundColor: "#5CD859",padding:20,width:300}}>
            <Text style={{color:"white",fontWeight:"700"}}>Room NO 916 is vacant today from</Text>
            <Text style={{color:"white",fontWeight:"700"}}>{e}</Text>
            </View>
            ) 
            : 
            <Text style={{width:300,borderColor:"black",borderWidth:2, padding:20,textAlign:'center',backgroundColor:"#D85963",color:"white",fontWeight:"800"}}>This classroom is not vacant today...There will be classes as per schedule</Text>
        }
      </View>
      <View>
        {
          preciseData[0].r915.length > 0 ? preciseData[0].r915.map(e => <View style={{alignItems:'center',backgroundColor: "#5CD859",padding:20,width:300}}>
            <Text style={{color:"white",fontWeight:"700"}}>Room NO 915 is vacant today from</Text>
            <Text style={{color:"white",fontWeight:"700"}}>{e}</Text>
            </View>
            ) 
            : 
            <Text style={{width:300,borderColor:"black",borderWidth:2, padding:20,textAlign:'center',backgroundColor:"#D85963",color:"white",fontWeight:"800"}}>This classroom is not vacant today...There will be classes as per schedule</Text>
        }
      </View>
      <View>
        {
          preciseData[0].r910.length > 0 ? preciseData[0].r910.map(e => <View style={{alignItems:'center',backgroundColor: "#5CD859",padding:20,width:300}}>
            <Text style={{color:"white",fontWeight:"700"}}>Room NO 910 is vacant today from</Text>
            <Text style={{color:"white",fontWeight:"700"}}>{e}</Text>
            </View>
            ) 
            : 
            <Text style={{width:300,borderColor:"black",borderWidth:2, padding:20,textAlign:'center',backgroundColor:"#D85963",color:"white",fontWeight:"800"}}>This classroom is not vacant today...There will be classes as per schedule</Text>
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        gap:10
        
    }
})