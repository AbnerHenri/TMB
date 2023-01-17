import React from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import { useContext } from "react";

import { AuthContext } from "../Contexts/Auth";
import { useNavigation } from '@react-navigation/native';

function AboutScreen() {

  const { weight, setWeight, height, setHeight, age, setAge } = useContext(AuthContext) 
  const Navigation = useNavigation()

  function Checks(route, weight, height, age) {
    if (weight != '' && height != '' && age != '') {
      Navigation.navigate(route)
    } else {
      alert('Preencha todos os campos para avançar')
    }
  }

  return (
      <View style={Styles.Page}>

        <Text style={Styles.Title}>Preencha os teus dados</Text>
          
          <TextInput 
            style={Styles.Inputs}
            placeholder={"Peso em kg"}
            placeholderTextColor={'#fff'}
            value={weight}
            keyboardType={'numeric'}
            onChangeText={(e) => setWeight(e)}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
          />

          <TextInput 
            style={Styles.Inputs}
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
            style={Styles.Inputs}
            placeholder={"Digite sua idade"}
            placeholderTextColor={'#fff'}
            value={age}
            keyboardType={'numeric'}
            onChangeText={(e) => setAge(e)}
            returnKeyType={'done'}
            ref={(input) => { this.thirdTextInput = input; }}
          />

        <TouchableOpacity style={Styles.Button} onPress={() => Checks('Gender', weight, height, age)}>
          <Text style={Styles.TextButton}>Avançar</Text>
        </TouchableOpacity>

      </View>
  )
}

const Styles = StyleSheet.create({
    Page: {
      backgroundColor: '#4361ee',
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center'
    },

    Inputs : {
      color : '#FFF',
      width : 260,
      
      margin : 10,
      padding : 12,

      border : 'none',
      borderBottomWidth : 1,
      borderBottomColor: '#FFF',
    },  

    Button: {
      justifyContent: 'center',
      alignItems: 'center',

      padding: 10,
      width: 200,

      borderRadius: 20,
      backgroundColor: '#6495ED',

      transform: [{ translateY: 50 }]
    },

    TextButton: {
      fonstSize: 15,
      color: 'white'
    },

    Title : {
      color : '#ddd',
      fontSize : 20,
      transform : [{ translateY : -50 }]
    }
})

export default AboutScreen