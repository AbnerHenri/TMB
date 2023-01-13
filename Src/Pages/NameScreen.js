import React, { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

function NameScreen() {

    const navi = useNavigation()

    const [name, setName] = useState('')

    function handlePage() {
        navi.navigate('About', { name })
    }

    return(
        <View style={Styles.Page}>

            <TextInput 
                placeholder="Digite o seu nome" 
                style={Styles.Input} 
                value={name}
                onChangeText={(e) => setName(e) }
            />

            <Button title="Próximo" onPress={() => handlePage()}/>
        </View>
    )
}

const Styles = StyleSheet.create({
    Page : {
        backgroundColor : '#ddd',
        flex : 1,

        justifyContent : 'center',
        alignItems : 'center'
    },
    
    Input : {
        width : 200,
        backgroundColor : '#ccc',
        margin : 10,
        textAlign : 'center',
    }
})

export default NameScreen