import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import ListaGastos from './componenents/pages/ListaGastos.Page';
import NavBar from "./componenents/utils/NavBar.Utils";
import Style from "./Styles/Style";


export default function App() {

  const [gastos, setGastos] = useState([
    { id: 'G1', nome: 'Conta de Luz', data: '30/05/2022', valor: 159.63},
    { id: 'G2', nome: 'Conta de agua', data: '30/05/2022', valor: 159.63},
    { id: 'G3', nome: 'Conta de agua', data: '30/05/2022', valor: 159.63},
    { id: 'G4', nome: 'Conta de agua', data: '30/05/2022', valor: 159.63},
    { id: 'G5', nome: 'Conta de agua', data: '30/05/2022', valor: 159.63},
    { id: 'G6', nome: 'Conta de agua', data: '30/05/2022', valor: 159.63},
    { id: 'G7', nome: 'Conta de agua', data: '30/05/2022', valor: 159.63},
    { id: 'G8', nome: 'Conta de agua', data: '30/05/2022', valor: 159.63},
    { id: 'G9', nome: 'Conta de agua', data: '30/05/2022', valor: 159.63},
    { id: 'G10', nome: 'Conta de agua', data: '30/05/2022', valor: 159.63},
    { id: 'G11', nome: 'Conta de agua', data: '30/05/2022', valor: 159.63}
  ]);

  const adicionaGasto = (gasto) => {
    if (gasto.length > 0) {
      const novaTarefa = {
        id: Math.random().toString(),
        nome: gasto.nome,
        data: gasto.data,
        valor: gasto.valor
      };
      setTarefas([...gastos, novaTarefa]);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={Style.app}
    >
      <View style={Style.conteudo}>
        <NavBar/> 
        <ListaGastos gastos={gastos}  onAdiciona={adicionaGasto} />
      </View>
      <StatusBar style="light"/>
    </KeyboardAvoidingView>
  );
}
