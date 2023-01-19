import React, { useEffect } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { useContext } from 'react';
import { AuthContext } from '../Contexts/Auth';

import { useNavigation } from '@react-navigation/native';
import { Global } from '../Styles/Globals';

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
    <View style={Global.Background}>
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