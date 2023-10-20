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
            tabBarIcon:({focused,color,size}) => {
                let iconName
                let rn = route.name
                if(rn === "Home") {
                    iconName = focused ? "home" : "home-outline"
                }else if(rn === "Todo"){
                    iconName = focused ? "list" : "list-outline"
                }

                return <Ionicons name={iconName} size={size} color={color}></Ionicons>
            }
        })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Todo" component={TodoScreen} />
            
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigator