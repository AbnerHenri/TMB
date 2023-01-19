import React from 'react';
import { View, Text, TouchableHighlightComponent } from 'react-native';

import { useContext } from 'react';
import { AuthContext } from '../Contexts/Auth';
import { Global } from '../Styles/Globals';

function ResultScreen() {

    const { activity, weight, height, age, gender } = useContext(AuthContext)

    function Calc(activity, weight, height, age, gender) {
        if(gender == 'M'){
            const TMBM = activity * (66 + ((13.7 * weight) + (5 * height) - (6.8 * age)))
            return TMBM.toFixed(2)
        }else{
            const TMBW = activity * (655 + ((9.6 * weight) + (1.8 * height) - (4.7 * age)))
            return TMBW.toFixed(2)
        }
    }

  return(
    <View style={Global.Background}>
        <Text>{Calc(activity, weight, height, age, gender)}</Text>
    </View>
  );
}

export default ResultScreen;