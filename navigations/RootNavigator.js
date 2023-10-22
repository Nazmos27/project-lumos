import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import HomeScreen from './screens/HomeScreen'
import TodoScreen from './screens/TodoScreen'
import AnimatedLottieView from 'lottie-react-native'

const RootNavigator = () => {

    const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
        <Tab.Navigator

        initialRouteName='Home'
        screenOptions={({route}) =>({
            tabBarIcon:({focused,size,color}) => {
                let iconName
                let rn = route.name
                if(rn === "Home") {
                    iconName = focused ? "home" : "home-outline"
                    // path= require('../assets/Lottie/homeIcon.json')
                }else if(rn === "Todo"){
                    iconName = focused ? "list" : "list-outline"
                    // path = require('../assets/Lottie/todoIcon.json')
                }

                return <Ionicons name={iconName} size={size} color={color} ></Ionicons>
            },
            headerTitleAlign:'center'
        })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Todo" component={TodoScreen} />
            
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator