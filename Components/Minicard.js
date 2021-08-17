import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions } from 'react-native'
import { View, Text,Image,StyleSheet,TouchableOpacity } from 'react-native'

const Minicard = (props) => {
    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("vplayer",{videoId:props.videoId,title:props.title})}>
            <View style={{flexDirection:'row',margin:7}}>
                <Image source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                    style={{width:"45%",
                    height:140
                }}
                />
                <View>
                    <Text style={Styles.searchVideoText} ellipsizeMode="tail" numberOfLines={3}>{props.title}</Text>
                    <Text style={{fontSize:12,margin:7}}>{props.channelName}</Text>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export default Minicard

const Styles = StyleSheet.create({
    searchVideoText:{
        fontSize:15,
        width:Dimensions.get("screen").width/2,
        margin:7
    }
})