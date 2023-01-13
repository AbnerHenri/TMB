import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NameScreen from "../Pages/NameScreen";
import AboutScreen from "../Pages/AboutScreen";


const MainStack = createStackNavigator();

export default () => {
    return(
    <MainStack.Navigator screenOptions={{
        headerTitleAlign : 'center'
    }}>
        
        <MainStack.Screen name="Home" component={NameScreen} />
        <MainStack.Screen name="About" component={AboutScreen} />
    </MainStack.Navigator>  
    )
}