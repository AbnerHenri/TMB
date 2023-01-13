import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";

import { useContext } from "react";
import { AuthContext } from "../Contexts/Auth";
import { TouchableHighlight } from "react-native-gesture-handler";

function AboutScreen() {

    return (
        <View style={Styles.Page}>
            
            <TextInput 
              placeholder="Digite seu peso"
            />

            <TextInput 
              placeholder="Digite sua altura"
            />

            <TextInput
              placeholder="Digite sua idade"
            />

            <TextInput
              placeholder="Digite sua altura"
            />

            <View>
                <TouchableHighlight>
                    <Text>Masculino</Text>
                </TouchableHighlight>

                <TouchableHighlight>
                    <Text>Feminino</Text>
                </TouchableHighlight>
            </View>

        </View>
    )
}

const Styles = StyleSheet.create({
    Page: {
        backgroundColor: '#ccc',
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center'
    },
})

export default AboutScreen