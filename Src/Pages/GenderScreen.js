import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { useContext } from 'react';
import { AuthContext } from '../Contexts/Auth';

import { useNavigation } from '@react-navigation/native';

function GenderScreen() {

  const { setGender } = useContext(AuthContext)
  const Navigation = useNavigation()  


  function setSex(type) {
    switch (type) {
      case 'Masculino':
        setGender('M')
        break;
      
      case 'Feminino':
        setGender('W')
    
      default:
        break;
    }

    Navigation.navigate('Activity')
  }

  return(
    <View style={Styles.Page}>
      <TouchableHighlight style={Styles.Button} onPress={() => setSex('Masculino')}>
        <Text style={{color : '#ddd'}}>Masculino</Text>
      </TouchableHighlight>

      <TouchableHighlight style={Styles.Button} onPress={() => setSex('Feminino')}>
        <Text style={{ color: '#ddd' }}>Feminino</Text>
      </TouchableHighlight>
    </View>
  );
}

const Styles = StyleSheet.create({
  Page : {
    flex : 1,

    justifyContent : 'center',
    alignItems : 'center',

    backgroundColor : '#000'
  },

  Button : {
    padding : 15,
    
    justifyContent: 'center',
    alignItems: 'center',

    margin : 15,
    padding: 15,
    width: 200,

    borderRadius: 25,
    backgroundColor: '#6495ED',
  }
})

export default GenderScreen;