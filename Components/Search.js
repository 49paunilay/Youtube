import React, { useState,useEffect } from 'react'
import { View, Text,StyleSheet,FlatList,ActivityIndicator } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Minicard from './Minicard';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux'
import Constants from 'expo-constants'
const URL = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=Cartoons&type=video&key=AIzaSyCjxXN5XzjtFUs5_EJr2Ab22vwS6KQtd_k"


const Search = ({navigation}) => {
    const mynav = useNavigation()
    const [value,setValue] = useState('')
    const dataToBeFetched = useSelector(state=>{
        return state
    })
    const disPatch= useDispatch()
    const [loading,setLoading] = useState(false)

    const fetchData=()=>{
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=${value}&type=video&key=AIzaSyCjxXN5XzjtFUs5_EJr2Ab22vwS6KQtd_k`).then((response)=>response.json()).then((data)=>{
            setLoading(false)
            disPatch({type:"add",payload:data.items})
        })
        
    }
    return (
        <View style={{flex:1,marginTop:Constants.statusBarHeight}}>
            <View style={styles.searchBar}>
                <AntDesign onPress={()=>mynav.navigate("myHome")} name="arrowleft" size={24} color="black" />
                <TextInput style={{flex:1,borderRadius:5,borderWidth:3,borderColor:'silver',padding:2}} value={value} onChange={(event)=>setValue(event.target.value)}/>
                <FontAwesome name="send" size={24} color="black" onPress={fetchData}/>
            </View>
            {
                loading?(<ActivityIndicator style={{marginTop:15}} size="large" color="red"/>):
            
            
            <FlatList
            data={dataToBeFetched}
            keyExtractor={item=>item.id.videoId}
            renderItem={({item})=>{
                return <Minicard videoId={item.id.videoId} title={item.snippet.title} channelName={item.snippet.channelTitle}/>
            }}
            />
            }
            
        </View>
    )
}

export default Search
const styles = StyleSheet.create({
    searchBar:{
        padding:8,
        flexDirection:'row',
        elevation:5,
        
    }
})

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&q=Cartoons&type=video&key=AIzaSyCjxXN5XzjtFUs5_EJr2Ab22vwS6KQtd_k
