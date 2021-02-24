import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./HomeScreen";
import SinglePlayerNavigator from "./SinglePlayer/SinglePlayerNavigator";


const {Navigator, Screen} = createStackNavigator();

const AppNavigation = () => {
    return (
        <Navigator initialRouteName="Home Screen" headerMode="none">
            <Screen name="Home Screen" component={HomeScreen}/>
            <Screen name="Single Player" component={SinglePlayerNavigator}/>
        </Navigator>
    )
}


export default AppNavigation
