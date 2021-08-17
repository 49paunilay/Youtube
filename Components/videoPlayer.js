import React from 'react'
import { View, Text,StyleSheet,Dimensions } from 'react-native'
import Constants from 'expo-constants'
import WebView from 'react-native-webview'
const videoPlayer = ({route}) => {
    const {videoId,title} = route.params
    
    return (
        <View style={{flex:1,marginTop:Constants.statusBarHeight}}>
            <View style={{
                width:"100%",
                height:350,
                backgroundColor:'red'
            }}>
                <WebView style={{flex:1}} javaScriptEnabled={true} domStorageEnabled={true} source={{uri:`https://www.youtube.com/embed/${videoId}`}}/>
            </View>
            <Text numberOfLines={5} ellipsizeMode="tail" >{title}</Text>

        </View> 

    )
}

export default videoPlayer

