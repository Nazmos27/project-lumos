import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Ionicons} from '@expo/vector-icons'
const ClassCard = ({data,day}) => {

    const preciseInfo  = data.info.filter(item => item.day === day.toLowerCase())
    
    // console.log(preciseInfo)

    if(preciseInfo.length != 0){
        return (
            <TouchableOpacity style={styles.container} >
                <View style={{justifyContent:'center',alignItems:'center'}} >
                    <Text>{data.code}</Text>
                    <Text>{data.name}</Text>
                    <Text>{data.instructor}</Text>
                    
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Ionicons name='alarm-outline' size={24}></Ionicons>
                        
                        {/* <AnimatedLottieView source={require('../../assets/Lottie/animation_lo11qtfr.json')} autoSize style={{height:40,width:40}} autoPlay loop ></AnimatedLottieView> */}
                        <Text>dfadsa</Text>
                    </View>
                    
                    
                </View>
            </TouchableOpacity>
            
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