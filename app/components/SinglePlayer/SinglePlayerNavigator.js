import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import ChooseModeSingle from "./ChooseModeSingle";
import QuestionSingle from "./QuestionSingle";

const {Navigator, Screen} = createStackNavigator();

const SinglePlayerNavigator = () => {
    return (
        <Navigator initialRouteName={'Single Player Home'} headerMode="none">
            <Screen name="Single Player Home" component={ChooseModeSingle}/>
            <Screen name="Single Player Question" component={QuestionSingle}/>
        </Navigator>
    )
}

export default SinglePlayerNavigator
