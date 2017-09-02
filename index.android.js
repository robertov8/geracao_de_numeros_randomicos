/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, View, Button, Text } from 'react-native';

export default class geracao_de_numeros_randomicos extends Component {

    geraNumeroAleatorio() {
        let numero_aleatorio = Math.random();
        alert(Math.floor(numero_aleatorio * 10));
    }

    render() {
        return (
            <View>
                <Text>Gerador de números randômicos</Text>
                <Button
                    title="Gerar um número randômico"
                    onPress={this.geraNumeroAleatorio}
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('geracao_de_numeros_randomicos', () => geracao_de_numeros_randomicos);
