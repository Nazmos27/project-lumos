import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AnimatedLottieView from 'lottie-react-native'


const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width
const IntroCompo = () => {

    const Images = [
        require('../assets/Lottie/class.json'),
        require('../assets/Lottie/announcment.json'),
        require('../assets/Lottie/animation_lobjyobd.json'),
        require('../assets/Lottie/boost.json'),
    ]

    const title = [
        {
            path: require('../assets/Lottie/class.json'),
            heading: "Trace",
            subheading: "your daily classtime in a more precise and smart way"
        },
        {
            path: require('../assets/Lottie/announcment.json'),
            heading:"Important",
            subheading:"notice and announcments under the tip of your finger!"
        },
        {
            path: require('../assets/Lottie/animation_lobjyobd.json'),
            heading: "Organaize",
            subheading:"your work to do for the day with the built-in 'ToDo' section"
        },
        {
            path: require('../assets/Lottie/boost.json'),
            heading:"Boost",
            subheading:"your productivity through participating different co-curricular activities"
        }
    ]

    const [imgActive, setImgActive] = useState(0)

    onchange = (nativeEvent) => {
        if(nativeEvent){
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
            if(slide != imgActive){
                setImgActive(slide)
            }
        }
    }

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.wrap}>
            <ScrollView 
            onScroll={({nativeEvent}) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            style={styles.wrap}
            >
                {title.map((item, index)=> 
                    // <Image key={index} resizeMode='stretch'
                    // style={styles.wrap}
                    // source={{uri:item}}
                    // ></Image>
                    <View style={[styles.wrap,{flex:1,flexDirection:'row',justifyContent:'center',alignItems:'center'}]}>
                        <AnimatedLottieView source={item.path} loop style={{width: WIDTH * 0.60}}  autoPlay></AnimatedLottieView>
                        <View style={{paddingVertical:20,width:WIDTH * 0.30}}>
                            <Text  style={styles.text}>{item.heading}</Text>
                            <Text style={{}}>{item.subheading}</Text>
                        </View>
                    </View>
                )}

            </ScrollView>
            <View style={styles.wrapDot}>
                {
                    Images.map((e,index) => 
                    <Text style={imgActive == index ? styles.dotActive : styles.dot}>
                        &#x2022;
                    </Text>
                    )
                }
            </View>
        </View>

    </SafeAreaView>
  )
}

export default IntroCompo

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#A7CBD9"
    },
    wrap:{
        height:HEIGHT * 0.33,
        width: WIDTH,
        
    },
    wrapDot:{
        position:'absolute',
        bottom:0,
        flexDirection:'row',
        alignSelf:'center'

    },
    dotActive:{
        margin: 1,
        color:"black",
        fontSize: 30
    },
    dot:{
        margin: 1,
        color:"white",
        fontSize: 30
    },
    text:{
        fontWeight:"800",
        fontSize:20
    }
})