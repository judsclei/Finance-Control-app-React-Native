import React from "react";
import { View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import Style from '../../Styles/Style';

export function Formulario()
{
    const [campo, setCampo] = useState("");
    const adiciona = () => {
      onAdiciona(campo);
      setCampo("");
      Keyboard.dismiss();
    };
    
    return(
        <View style={[Style.field, Style.mt2]}>
            <TextInput
            style={Style.input}
            defaultValue={campo}
            onChangeText={(campo) => setCampo(campo)}
            onSubmitEditing={adiciona}
            onBlur={Keyboard.dismiss}
          />
        </View>
    );
}