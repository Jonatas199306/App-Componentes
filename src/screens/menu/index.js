import React from "react";
import { View, Text } from "react-native";

import {styles} from'./styles';
import { ButtonA, ButtonB } from '../../components/buttons';

export default function Menu(){
    return(
<View style={styles.container}>
    <View style={styles.containerTitulo}>
        <Text style={styles.text}>Tela Menu</Text>
    </View>
    <ButtonA />
    <ButtonA />
    <ButtonB />
    <ButtonB />
</View>

    );
}