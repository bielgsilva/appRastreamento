import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const SearchHistory = ({ successfulSearchHistory, handleSelectedTrackingCode, handleEdit, handleDeleteTrackingName }) => (
  <>
    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Histórico de Busca</Text>
    {successfulSearchHistory.map((item) => (
      <View key={item.trackingCode}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <TouchableOpacity onPress={() => handleDeleteTrackingName(item.trackingName)}>
            <Text style={{ fontSize: 24, marginRight: 10 }}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSelectedTrackingCode(item.trackingCode)}>
            <Text style={{ fontSize: 18, flex: 1 }}>{item.trackingName}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleEdit(item.trackingName)}>
            <Text style={{ fontSize: 24 }}>✎</Text>
          </TouchableOpacity>
        </View>
        <View style={{ borderBottomWidth: 1, borderColor: 'black', marginBottom: 10 }} />
      </View>
    ))}
  </>
);

SearchHistory.propTypes = {
  successfulSearchHistory: PropTypes.array.isRequired,
  handleSelectedTrackingCode: PropTypes.func.isRequired,
  handleDeleteTrackingName: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default SearchHistory;
