import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import {AntDesign} from '@expo/vector-icons'
import colors from '../../Colors'


export default class AddListModal extends Component {
    backgroundColors = ["#5CD859", "#24A6D9", "#595BD9", "#8022D9", "#D159D8", "#D85963", "#D88559"]

    state={
        name: '',
        color: this.backgroundColors[0]
    }

    renderColor(){
        return this.backgroundColors.map(color => {
            return (
                <TouchableOpacity></TouchableOpacity>
            )
        })
    }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <TouchableOpacity style={{position: 'absolute', top: 20, right: 20}} onPress={this.props.closeModal}>
            <AntDesign name='close' size={24} color={colors.black} />
        </TouchableOpacity>
        <View style={{alignSelf: 'stretch', marginHorizontal : 32}}>
            <Text style={styles.title}>Create To Do List</Text>
            <TextInput style={styles.input} placeholder='List Name?' onChangeText={(text) => this.setState({name:text})}></TextInput>
            <TouchableOpacity style={[styles.button, {backgroundColor:this.state.color}]}>
                <Text style={{color: colors.white, fontWeight : "800", fontSize: 16}}>Create List!</Text>
            </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title:{
        fontSize: 28,
        textAlign:'center',
        marginBottom : 16,
        fontWeight : '700'
    },
    input:{
        borderColor: colors.black,
        borderWidth : StyleSheet.hairlineWidth,
        padding : 14,
        borderRadius: 10,
        height : 50,
        marginTop : 8,
        fontSize : 18
    },
    button:{
        height:50,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems:'center'
    }
})