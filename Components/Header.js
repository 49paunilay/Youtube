import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import {Entypo} from '@expo/vector-icons'
import Constants  from 'expo-constants'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Header = () => {
    const mynav = useNavigation()
    return (
        <View style={myStyle.baseView}>
            <View style={myStyle.headerView}>
                <Entypo style={{marginLeft:5}} name="youtube" size={28} color="red"/>
                <Text style={myStyle.fontStyle}>Youtube</Text>
            </View>
            <View style={myStyle.headerView}>
                <Entypo name="video-camera" size={28} color="gray" style={{marginHorizontal:9,marginVertical:5}}/>
                <FontAwesome onPress={()=>mynav.navigate("SearchScreen")} name="search" size={28} color="black" style={{marginHorizontal:9,marginVertical:5}}/>
                <MaterialCommunityIcons name="account" size={28} color="black" style={{marginHorizontal:9,marginVertical:5}} />
            </View>
        </View>
    )
}

export default Header
const myStyle = StyleSheet.create({
    baseView:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:Constants.statusBarHeight,
        height:40,
        backgroundColor:'white',
        elevation:15
    },
    headerView:{
        display:'flex',
        flexDirection:'row',
        marginHorizontal:15
    },
    fontStyle:{
        fontWeight:'bold',
        fontSize:22,
        marginHorizontal:5

    }
})

