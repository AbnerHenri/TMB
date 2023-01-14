import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

function GenderScreen() {
  return(
    <View style={Styles.Page}>
      <TouchableHighlight>
        <Text>Masculino</Text>
      </TouchableHighlight>

      <TouchableHighlight>
        <Text>Feminino</Text>
      </TouchableHighlight>
    </View>
  );
}

const Styles = StyleSheet.create({
  Page : {
    flex : 1,
  }
})

export default GenderScreen;