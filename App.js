import React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import WriteScreen from './screens/writeScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadScreen from './screens/readScreen';
import { createAppContainer } from 'react-navigation';


export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const TabNavigator = createBottomTabNavigator({
  'Write Story': {screen: WriteScreen},
  'Read Story': {screen: ReadScreen}
}, {
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      if(routeName === "Write Story"){
        return(
          <Image
          source={require('./assets/write.png')}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "Read Story"){
        return(
          <Image
          source={require('./assets/read.png')}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
})

const AppContainer =  createAppContainer(TabNavigator);
