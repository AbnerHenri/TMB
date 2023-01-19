import React, { useState } from "react";
import { View, Text, Button, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Global } from "../Styles/Globals";

function NameScreen() {

    const navi = useNavigation()

    const [name, setName] = useState('')

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