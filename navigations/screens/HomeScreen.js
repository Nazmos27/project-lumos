import { Text, StyleSheet, View } from 'react-native'
import React from 'react'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
    }
})