import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../../../../styles/index';

const EditModal = ({ isOpen, onClose, handleSaveEdit, selectedTrackingCode }) => {
  const [editedValue, setEditedValue] = useState(selectedTrackingCode);

  const handleInputChange = (text) => {
    setEditedValue(text);
  };

  const handleSave = () => {
    console.log(editedValue);
    handleSaveEdit(editedValue);
    onClose();
  };

  return (
    <Modal
      visible={isOpen}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
      style={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.trackingContent}>

          <Text style={styles.title1}>Editar Nome do Código</Text>
          <Text style={styles.title1}>Atual: {selectedTrackingCode}</Text>
          <TextInput
            style={styles.input}
            value={editedValue}
            onChangeText={handleInputChange}
            placeholder="Digite o novo nome do código"
          />
          <TouchableOpacity onPress={handleSave} style={styles.button}>
            <Text style={styles.saveButtonText}>Salvar</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

EditModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleSaveEdit: PropTypes.func.isRequired,
  selectedTrackingCode: PropTypes.string.isRequired,
};

export default EditModal;
