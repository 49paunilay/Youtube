import React from 'react'
import { View, Text,Image,StyleSheet,Dimensions,TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants'
const CustomCard = (props) => {
    const navigation = useNavigation()
    return (
        <View style={{marginTop:Constants.statusBarHeight}}>
            <TouchableOpacity onPress={()=>navigation.navigate("vplayer",{videoId:props.videoId,title:props.title})}>
                    <View>
                        <Image source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
                        style={{width:"100%",
                        height:250
                    }}
                        />
                    </View>
            </TouchableOpacity>
        <View style={styles.videoDeatilsSection}>
            <Image
                source={{uri:props.thumbnail}}
                fadeDuration={0}
                style={{ width: 50, height: 50,borderRadius:50 }}
            />
            <View style={{marginHorizontal:15}}>
                <Text ellipsizeMode="tail" numberOfLines={1} style={styles.videoTitle}>{props.title}</Text>
                <Text ellipsizeMode="tail" numberOfLines={1} style={styles.channelDetails}>{props.channelName}</Text>
            </View>
        </View>
        </View>
    )
}

export default CustomCard
const styles = StyleSheet.create({
    videoDeatilsSection:{
        display:'flex',
        flexDirection:'row',
        
    },
    videoTitle:{
        fontWeight:'bold',
        fontSize:20,
        fontStyle:'italic',
        width:Dimensions.get("screen").width-50
    },
    channelDetails:{
        fontSize:15,
        fontWeight:'bold',
        width:Dimensions.get("screen").width-50
    }
})
