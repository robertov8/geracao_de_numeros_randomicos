/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, Text } from 'react-native';

export default class geracao_de_numeros_randomicos extends Component {
  render() {
    return (
        <Text>Meu primeiro APP</Text>
    );
  }
}

AppRegistry.registerComponent('geracao_de_numeros_randomicos', () => geracao_de_numeros_randomicos);
