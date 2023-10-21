import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const ClassCard = ({data}) => {
    
    return (
        <TouchableOpacity style={styles.container} >
            <View style={{justifyContent:'center',alignItems:'center'}} >
                <Text>{data.code}</Text>
                <Text>{data.name}</Text>
                <Text>{data.instructor}</Text>
                <Text>{data.time}</Text>
            </View>
        </TouchableOpacity>
        
    )
}

export default ClassCard

const styles = StyleSheet.create({
    container:{
        flex:1,
        height:10,
        width:300,
        backgroundColor:'#fff',
        borderRadius:2,
        marginVertical:5,
        paddingHorizontal:10,
        shadowOffset:{width: 3, height: 3},
        shadowColor:"rgba(0,0,0,0.4)",
        shadowOpacity:0.8,
        elevation:6,
        alignItems:'center',
        justifyContent:'center',
       
    }
})