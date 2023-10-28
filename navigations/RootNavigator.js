import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import HomeScreen from './screens/HomeScreen'
import TodoScreen from './screens/TodoScreen'
import AnimatedLottieView from 'lottie-react-native'
import InfoScreen from './screens/InfoScreen'
import NoticeScreen from './screens/NoticeScreen'

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
                }else if(rn === "Info"){
                    iconName = focused ? "search" : "search-outline"
                }else if(rn === "Notice"){
                    iconName = focused ? "megaphone" : "megaphone-outline"
                }

                return <Ionicons name={iconName} size={size} color={color} ></Ionicons>
            },
            headerTitleAlign:'center'
        })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Info" component={InfoScreen}/>
            <Tab.Screen name='Notice' component={NoticeScreen}/>
            <Tab.Screen name="Todo" component={TodoScreen} />
            
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator