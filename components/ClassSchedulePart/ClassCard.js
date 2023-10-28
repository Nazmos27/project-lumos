import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
const ClassCard = ({data}) => {

    console.log(data);

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
                    <Text>{data.code}</Text>
                    <Text>{data.name}</Text>
                    <Text>{data.instructor}</Text>
                    
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Ionicons name='alarm-outline' size={24}></Ionicons>
                        
                        {/* <AnimatedLottieView source={require('../../assets/Lottie/animation_lo11qtfr.json')} autoSize style={{height:40,width:40}} autoPlay loop ></AnimatedLottieView> */}
                        <Text>{data.info.time}</Text>
                    </View>
                    
                    
                </View>
            </TouchableOpacity>
            {/* {testing > data.code ? <View style={styles.container}>
                <Text>gap time</Text>
            </View> : null} */}
            </>
            
        )
    }else{
        return null
    }
    
    
}

export default ClassCard

const styles = StyleSheet.create({
    container:{
        
        backgroundColor:'#fff',
        borderRadius:2,
        marginVertical:5,
        paddingVertical:30,
        shadowOffset:{width: 3, height: 3},
        shadowColor:"rgba(0,0,0,0.4)",
        shadowOpacity:0.8,
        elevation:6,
        alignItems:'center',
        justifyContent:'center',
       
    }
})