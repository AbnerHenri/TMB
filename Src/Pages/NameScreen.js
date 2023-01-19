import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Global } from "../Styles/Globals";

import { useContext } from "react";
import { AuthContext } from "../Contexts/Auth";

function NameScreen() {

    const { setName, name } = useContext(AuthContext)
    const navi = useNavigation()

    function handlePage() {
        navi.navigate('About')
    }

    return(
        <View style={Global.Background}>

            <TextInput 
                placeholder="Digite o seu nome" 
                placeholderTextColor={'#ddd'}
                style={Global.Inputs} 
                value={name}
                onChangeText={(e) => setName(e) }
            />

            <TouchableOpacity style={Global.Button} onPress={()=> handlePage()}>
                <Text style={Global.TextButton}>Avançar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NameScreen