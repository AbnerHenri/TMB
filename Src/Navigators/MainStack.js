import React from "react";
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";

import NameScreen from "../Pages/NameScreen";
import AboutScreen from "../Pages/AboutScreen";
import GenderScreen from "../Pages/GenderScreen";
import ActivityScreen from "../Pages/ActivityScreen";
import ResultScreen from "../Pages/ResultScreen";


const MainStack = createStackNavigator();

export default () => {

    return(
    <MainStack.Navigator 
        screenOptions={{
            headerTitleAlign : 'center',
            headerTintColor : '#fff',
            HeaderBackground: '#4cc9f0'
        }}
    >        
        <MainStack.Screen name="Home" component={NameScreen} />
        <MainStack.Screen name="About" component={AboutScreen} />
        <MainStack.Screen name="Gender" component={GenderScreen} />
        <MainStack.Screen name="Activity" component={ActivityScreen} />
        <MainStack.Screen name="Result" component={ResultScreen} />
    </MainStack.Navigator>  
    )
}