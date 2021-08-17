import React from 'react'
import { View, ScrollView,FlatList } from 'react-native'
import CustomCard from './CustomCard'
import Header from './Header'
import {useSelector} from 'react-redux'

const Home = () => {
    const centralData = useSelector(state=>{
        return state
    })
    console.log(centralData);
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <Header/>
            <FlatList
                data={centralData.sort(()=>Math.random()-0.5)}
                keyExtractor={(item)=>item.id.videoId}
                renderItem={({item})=>{
                    return <CustomCard videoId={item.id.videoId} title={item.snippet.title} channelName={item.snippet.channelTitle} 
                    thumbnail={item.snippet.thumbnails.default.url}
                    />
                }}
            />
        </View>

    )
}

export default Home
