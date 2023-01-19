import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

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

        <Text style={Styles.Title}>Quantas vezes na semana você se exercita?</Text>

        <View>
            <TouchableOpacity style={Styles.Card} onPress={()=> setActivityFunc(1)}>
                <Text style={Styles.ButStyle}>Não faço nenhum exercicio fisíco</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity style={Styles.Card} onPress={() => setActivityFunc(2)}>
                <Text style={Styles.ButStyle}>De 1 a 3 vezes por semana</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity style={Styles.Card} onPress={() => setActivityFunc(3)}>
                <Text style={Styles.ButStyle}>De 3 a 5 vezes na semana</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity style={Styles.Card} onPress={() => setActivityFunc(4)}>
                <Text style={Styles.ButStyle}>De 5 a 6 vezes na semana</Text>
            </TouchableOpacity>
        </View>

        <View>
            <TouchableOpacity style={Styles.Card} onPress={() => setActivityFunc(5)}>
                <Text style={Styles.ButStyle}>Diariamente até 2 vezes no dia</Text>
            </TouchableOpacity>
        </View>
      </View>
  );
}

const Styles = StyleSheet.create({

    Card: {
        padding: 15,

        justifyContent: 'center',
        alignItems: 'center',

        margin: 15,
        padding: 15,
        width: 280,

        borderRadius: 25,
        backgroundColor: '#6495ED',
    },

    ButStyle : {
        justifyContent : 'center',
        alignItems : 'center',

        color : '#ddd'
    },

    Title : {
        fontSize : 20,

        color : '#fff',
        textAlign : 'center',

        transform : [{ translateY : -30 }]
    }
})

export default ActivityScreen;