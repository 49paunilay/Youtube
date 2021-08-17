import React from 'react';
import Search from './Components/Search';
import Home from './Components/Home'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import VideoExplore from './Components/VideoExplore';
import ChannelSubscribe from './Components/ChannelSubscribe';
import videoPlayer from './Components/videoPlayer';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { reducer } from './Reducers/Reducer';
const Stack = createNativeStackNavigator()
//const Tab =createBottomTabNavigator()

const Store = createStore(reducer)



// const RootHome=()=>{
//   return(
//     <Tab.Navigator>
//       <Tab.Screen name ="Home" component={Home}/>
//       <Tab.Screen name="Explore" component={VideoExplore}/>
//       <Tab.Screen name="subscribe" component={ChannelSubscribe}/>
//     </Tab.Navigator>
//   )
// }


export default function App() {
  
  return (
    <Provider store={Store}>
      <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
              <Stack.Screen name="myHome" component={Home}/>
              {/* <Stack.Screen name="rootHome" component={RootHome}/> */}
              <Stack.Screen name="SearchScreen" component={Search}/>
              <Stack.Screen name="vplayer" component={videoPlayer}/>
              
            </Stack.Navigator>
            {/* <View style={{marginTop:Constants.statusBarHeight}}>
              <Search/>
              <StatusBar style="auto" />
            </View> */}
      </NavigationContainer>
    </Provider>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//   },
// });
