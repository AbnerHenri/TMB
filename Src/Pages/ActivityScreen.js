import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import { useContext } from 'react';
import { AuthContext } from '../Contexts/Auth';

import { useNavigation } from '@react-navigation/native';
import { Global } from '../Styles/Globals';

function ActivityScreen() {

    const { setActivity } = useContext(AuthContext)
    const Navigation = useNavigation()

    function setActivityFunc(type) {
        switch (type) {
            case 1:
                setActivity(1.2)
                break;
            case 2:
                setActivity(1.375)
                break;
            case 3:
                setActivity(1.55)
                break;
            case 4:
                setActivity(1.725)
                break;
            case 5:
                setActivity(1.9)
        
            default:
                break;
        }

        Navigation.navigate('Result')
    }

  return(
      <View style={Global.Background}>

        <View>
          <TouchableHighlight style={Styles.Button} onPress={()=> setActivityFunc(1)}>
              <Text style={Styles.ButStyle}>Sedentário</Text>
          </TouchableHighlight>
          <Text style={{color : '#ddd'}}>Não faço nenhum exercicio fisíco</Text>
        </View>

        <View>
          <TouchableHighlight style={Styles.Button} onPress={() => setActivityFunc(2)}>
              <Text style={Styles.ButStyle}>Levemente Ativo</Text>
          </TouchableHighlight>
            <Text style={{ color: '#ddd' }}>Me exercito de 1 a 3 vezes por semana</Text>
        </View>

        <View>
          <TouchableHighlight style={Styles.Button} onPress={() => setActivityFunc(3)}>
              <Text style={Styles.ButStyle}>Moderadamente Ativo</Text>
          </TouchableHighlight>
            <Text style={{ color: '#ddd' }}>Me exercito de 3 a 5 vezes na semana</Text>
        </View>

        <View>
            <TouchableHighlight style={Styles.Button} onPress={() => setActivityFunc(4)}>
                <Text style={Styles.ButStyle}>Altamente Ativo</Text>
            </TouchableHighlight>
            <Text style={{ color: '#ddd' }}>Me exercito de 5 a 6 vezes na semana</Text>
        </View>

        <View>
          <TouchableHighlight style={Styles.Button} onPress={() => setActivityFunc(5)}>
              <Text style={Styles.ButStyle}>Extremamente Ativo</Text>
          </TouchableHighlight>
            <Text style={{ color: '#ddd' }}>Me exercito diariamente até 2 vezes no dia</Text>
        </View>
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

    Button: {
        padding: 15,

        justifyContent: 'center',
        alignItems: 'center',

        margin: 15,
        padding: 15,
        width: 200,

        borderRadius: 25,
        backgroundColor: '#6495ED',
    },

    ButStyle : {
        justifyContent : 'center',
        alignItems : 'center',

        color : '#ddd'
    }
})

export default ActivityScreen;