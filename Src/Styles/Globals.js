import { StyleSheet } from "react-native";

export const Global = StyleSheet.create({
    Background : {
        backgroundColor: '#4361ee',

        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },

    Button: {
        justifyContent: 'center',
        alignItems: 'center',

        padding: 10,
        width: 200,

        borderRadius: 20,
        backgroundColor: '#6495ED',

        position: 'absolute',
        bottom: 70
    },

    TextButton: {
        fonstSize: 15,
        color: 'white'
    },

    Inputs: {
        color: '#FFF',
        width: 260,

        margin: 10,
        padding: 12,

        border: 'none',
        borderBottomWidth: 1,
        borderBottomColor: '#FFF',

        textAlign : 'center'
    },
})

