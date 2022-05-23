import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Style from '../../Styles/Style';

export default  function NavBar()
{
    return (
        <View style={[Style.headerBar, Style.dark]}>
          <Text style={Style.appName}>Lista de Gastos</Text>
        </View>
      );
}