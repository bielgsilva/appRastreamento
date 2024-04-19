import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles';

const RastrearEncomenda = ({ submitHandler }) => (
  <View>
    <Text style={styles.text}>Rastrear Encomenda</Text>
    <TextInput
      style={styles.input}
      placeholder="CÓDIGO DE RASTREIO"
    />
    <TouchableOpacity
      style={styles.button}
      onPress={submitHandler} 
    >
      <Text style={styles.buttonText}>Rastrear</Text>
    </TouchableOpacity>
  </View>
);

RastrearEncomenda.propTypes = {
  submitHandler: PropTypes.func.isRequired,
};

export default RastrearEncomenda;
