import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    FlatList,
    TextInput,
    Keyboard,
    Button,
  } from "react-native";
import { 
    Table, 
    TableWrapper, 
    Row, 
    Rows, 
    Col, 
    Cols, 
    Cell } from 'react-native-table-component';
import Style from '../../Styles/Style';
import { Formulario } from '../utils/Formulario.Utils';
import { Gastos } from '../utils/Gastos.Utils';


export default  function ListaGastos({gastos, onAdiciona})
{ 
  return (
    <View style={Style.component}>
      <View style={Style.componentHeader}>
      <View style={Style.componentHeader}><Text style={Style.h1}>Dividas a pagar</Text></View>
      </View>
      <View style={Style.componentContent}>
        <FlatList
          data={gastos}
          renderItem={({ item }) => (
            <Gastos gastos={item}/>
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={Style.liSeparator} />}
          ListFooterComponent={() => <View style={Style.liSeparator} />}
          style={Style.list}
        />
        <View style={[Style.field, Style.mt2]}>
          <Button onPress={Formulario} title="Adicionar" />
        </View>
      </View>
    </View>
  );
}