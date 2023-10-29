import { Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'


const HEIGHT = Dimensions.get("window").height
const WIDTH = Dimensions.get("window").width
const IntroCompo = () => {

    const Images = [
        "https://img.freepik.com/free-psd/flat-design-art-class-template_23-2149629875.jpg?w=826&t=st=1698567403~exp=1698568003~hmac=da992169c6e1ddcd7b65cfd5087a5c8018d4cbc1b143bc7849e152c64cc86589",
        "https://img.freepik.com/free-psd/arts-handcraft-landing-page-template_23-2149961447.jpg?w=826&t=st=1698567445~exp=1698568045~hmac=e8f59bf1cedff11f96080bd36ff0f9e69416941d1c934b2bc0c02c1e67e3f830",
        "https://img.freepik.com/free-psd/flat-design-art-class-template_23-2149629875.jpg?w=826&t=st=1698567403~exp=1698568003~hmac=da992169c6e1ddcd7b65cfd5087a5c8018d4cbc1b143bc7849e152c64cc86589",
        "https://img.freepik.com/free-psd/arts-handcraft-landing-page-template_23-2149961447.jpg?w=826&t=st=1698567445~exp=1698568045~hmac=e8f59bf1cedff11f96080bd36ff0f9e69416941d1c934b2bc0c02c1e67e3f830",

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
                {Images.map((item, index)=> 
                    <Image key={index} resizeMode='stretch'
                    style={styles.wrap}
                    source={{uri:item}}
                    ></Image>
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
        flex:1
    },
    wrap:{
        height:HEIGHT * 0.33,
        width: WIDTH
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
    }
})