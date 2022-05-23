import React from 'react';
import { View } from "react-native";
import Style from '../../Styles/Style';
import { List } from 'react-native-paper';

export function Gastos({gastos}){

    const [expanded, setExpanded] = React.useState(true);

    const handlePress = () => setExpanded(!expanded);
    
    return (
        <View >
            <List.Accordion style={Style.li}
                title= {"Nome: " + gastos.nome}
                left={props => <List.Icon {...props} icon='equal' />}>
                <List.Item title= {"Data de venciemnto: " + gastos.data} />
                <List.Item title= {"Valor: " + gastos.valor} />
            </List.Accordion>
        </View>
      );
 }