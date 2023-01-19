import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useContext } from "react";

import { AuthContext } from "../Contexts/Auth";
import { useNavigation } from '@react-navigation/native';

import { Global } from "../Styles/Globals";

function AboutScreen() {

  const { weight, setWeight, height, setHeight, age, setAge, name } = useContext(AuthContext) 
  const Navigation = useNavigation()

  function Checks(route, weight, height, age) {
    if (weight != '' && height != '' && age != '') {
      Navigation.navigate(route)
    } else {
      alert('Preencha todos os campos para avançar')
    }
  }

  return (
      <View style={Global.Background}>

        <Text style={Styles.Title}>Olá, {name == '' ? 'Visitante' : name }</Text>
        <Text style={Styles.Title}>Por favor preencha os teus dados</Text>
          
          <TextInput 
            style={Global.Inputs}
            placeholder={"Peso em kg"}
            placeholderTextColor={'#fff'}
            value={weight}
            keyboardType={'numeric'}
            onChangeText={(e) => setWeight(e)}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
          />

          <TextInput 
            style={Global.Inputs}
            placeholder={"Altura em cm"}
            placeholderTextColor={'#fff'}    
            value={height}
            keyboardType={'numeric'}
            onChangeText={(e) => setHeight(e)}
            returnKeyType={'next'}
            ref={(input) => { this.secondTextInput = input; }}
            onSubmitEditing={() => { this.thirdTextInput.focus(); }}
          />

          <TextInput
            style={Global.Inputs}
            placeholder={"Digite sua idade"}
            placeholderTextColor={'#fff'}
            value={age}
            keyboardType={'numeric'}
            onChangeText={(e) => setAge(e)}
            returnKeyType={'done'}
            ref={(input) => { this.thirdTextInput = input; }}
          />

        <TouchableOpacity style={Global.Button} onPress={() => Checks('Gender', weight, height, age)}>
          <Text style={Global.TextButton}>Avançar</Text>
        </TouchableOpacity>

      </View>
  )
}

const Styles = StyleSheet.create({ 

    Title : {
      color : '#fff',
      fontSize : 19,
      transform : [{ translateY : -50 }],

      padding : 10,
    }
})

export default AboutScreen