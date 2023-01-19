import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import { useContext } from 'react';
import { AuthContext } from '../Contexts/Auth';

import { Global } from '../Styles/Globals';
import { useNavigation } from '@react-navigation/native';

function ResultScreen() {

    const Navigation = useNavigation()

    const { 
        activity, setActivity,
        weight, setWeight,
        height, setHeight, 
        age, setAge,
        gender, setGender,
        setName
    } = useContext(AuthContext)

    function Calc(activity, weight, height, age, gender) {
        if(gender == 'M'){
            const TMBM = activity * (66 + ((13.7 * weight) + (5 * height) - (6.8 * age)))
            return TMBM.toFixed(2)
        }else{
            const TMBW = activity * (655 + ((9.6 * weight) + (1.8 * height) - (4.7 * age)))
            return TMBW.toFixed(2)
        }
    }

    function Return(){
        setName('')
        setWeight('')
        setHeight('')
        setAge('')
        setGender('')
        setActivity('')
        Navigation.navigate('Home')
    }

  return(
    <View style={Global.Background}>

        <Text style={Styles.Title}>A sua taxa de metabolismo basal é :</Text>

        <View style={Styles.Card}>
            <Text style={Styles.Calc}>{Calc(activity, weight, height, age, gender)}</Text>
        </View>

        <TouchableOpacity style={Global.Button} onPress={()=> Return()}>
            <Text style={Global.TextButton}>Calcular Novamente</Text>
        </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
    Card : {
        width : '80%',
        padding : 40,

        justifyContent : 'center',
        alignItems : 'center',

        backgroundColor: '#6495ED',
    },

    Title : {
        fontSize : 25,
        color : '#DDD',

        transform : [{ translateY : -50 }],
        textAlign : 'center'
    },

    Calc : {
        fontSize : 22,
        paddingLeft : 25,
        paddingRight : 25,
        paddingBottom : 10,
        color : '#fff',

        borderBottomWidth : 2,
        borderBottomColor: '#fff'
    },

    
})

export default ResultScreen;