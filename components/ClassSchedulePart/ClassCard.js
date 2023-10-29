import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
const ClassCard = ({data}) => {

    // console.log(data);

    // const preciseInfo  = data.info.filter(item => item.day === day.toLowerCase())
    // console.log(preciseInfo)

    // const testing = ["10.00am - 11.15am", "11.30am - 12.10pm"]
    // const an = testing[0].split(" - ")
    // console.log(an)
    
    // console.log(preciseInfo)

    if(data){
        return (
            <>
            <TouchableOpacity style={styles.container} >
                <View style={{justifyContent:'center',alignItems:'center'}} >
                    {data.info.duration == "2x" && <Text style={{position:'relative', left: 119, bottom:30, backgroundColor:"#D85963", paddingHorizontal:10,paddingVertical:4,color:"white"}}> <Ionicons name='hourglass-outline' size={15}></Ionicons> {data.info.duration}</Text>}
                    <Text style={styles.text}>{data.code}</Text>
                    <Text style={{color:"white",fontWeight:"800",fontSize:20,textAlign:'center'}}>{data.name}</Text>
                    <Text style={{color:"white",fontWeight:"800",fontSize:16}}>{data.instructor}</Text>
                    
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Ionicons style={{color:"white",fontWeight:"800",marginHorizontal:4}} name='alarm-outline' size={26}></Ionicons>
                        <Text style={{color:"white",fontWeight:"800",fontSize:16}}>{data.info.time}</Text>
                    </View>
                    
                    
                </View>
            </TouchableOpacity>
            {data.info.gap != "no" ? <View style={styles.container}>
                <Text style={{fontSize:16,color:"#FFC436", fontWeight:"700"}}>Gap From ---- {data.info.gap}</Text>
            </View> : null}
            </>
            
        )
    }else{
        return null
    }
    
    
}

export default ClassCard

const styles = StyleSheet.create({
    container:{
        
        backgroundColor:'#468B97',
        borderRadius:2,
        marginVertical:5,
        paddingVertical:30,
        shadowOffset:{width: 3, height: 3},
        shadowColor:"rgba(0,0,0,0.4)",
        shadowOpacity:0.8,
        elevation:6,
        alignItems:'center',
        justifyContent:'center',
        
       
    },
    text:{
        color: "white",
        fontSize: 18,
        fontWeight: "700"  
    }
})