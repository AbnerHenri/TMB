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
            placeholderTextColor={'#808080'}
            value={weight}
            keyboardType={'numeric'}
            onChangeText={(e) => setWeight(e)}
            returnKeyType={'next'}
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
          />

          <TextInput 
            style={Styles.Inputs}
            placeholder={"Altura em cm"}
            placeholderTextColor={'#808080'}    
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
            placeholderTextColor={'#808080'}
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
        backgroundColor: '#ccc',
        flex: 1,

        backgroundColor : '#000',

        justifyContent: 'center',
        alignItems: 'center'
    },

    Inputs : {
      color : '#ddd',
      width : 260,
      
      margin : 10,
      padding : 12,

      borderWidth : 1,
      borderBottomColor: '#6495ED',
      backgroundColor: '#363636',
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