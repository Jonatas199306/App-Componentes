import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

export function ButtonA (){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.text}>Botao A</Text>
            </TouchableOpacity>
        </View>
    );
};

export function ButtonB (){
    return(
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.text}>Botao B</Text>
            </TouchableOpacity>
        </View>
    );
};