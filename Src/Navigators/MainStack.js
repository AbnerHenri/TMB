import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NameScreen from "../Pages/NameScreen";
import AboutScreen from "../Pages/AboutScreen";
import GenderScreen from "../Pages/GenderScreen";


const MainStack = createStackNavigator();

export default () => {
    return(
    <MainStack.Navigator screenOptions={{
        headerTitleAlign : 'center',
    }}>
        
        <MainStack.Screen name="Home" component={NameScreen} />
        <MainStack.Screen name="About" component={AboutScreen} />
        <MainStack.Screen name="Gender" component={GenderScreen} />
    </MainStack.Navigator>  
    )
}