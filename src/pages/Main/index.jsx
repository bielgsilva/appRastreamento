import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../../../styles';

import axios from '../../lib/axios';


import TrackingResult from './components/TrackingResult';
import EditModal from './components/EditModal';


function Main() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState(false);
  const [invalidCode, setInvalidCode] = useState(false);
  const [apiIsDown, setApiIsDown] = useState(false);
  const [loading, setLoading] = useState(false);
  const [clearPreviousSearch, setClearPreviousSearch] = useState(false);
  const [emptyHistory, setEmptyHistory] = useState(false);
  const [successfulSearchHistory, setSuccessfulSearchHistory] = useState([]);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedTrackingCode, setSelectedTrackingCode] = useState('');

  const [trackingCode, setTrackingCode] = useState('');


  useEffect(() => {
    const loadHistory = async () => {
      try {
        const savedHistory = await AsyncStorage.getItem('searchHistory');
        if (savedHistory) {
          setSuccessfulSearchHistory(JSON.parse(savedHistory));
          setEmptyHistory(false);
        }
      } catch (error) {
        console.error('Error loading search history: ', error);
      }
    };

    loadHistory();
  }, []);

  const handleTrackingCodeChange = (text) => {
    setTrackingCode(text);
    console.log(text);
  };

  const submitHandler = async (trackingCode) => {
    try {
      setSearch(true);
      setInvalidCode(false);
      setLoading(true);

      if (clearPreviousSearch) {
        setData([]);
        setClearPreviousSearch(false);
      }

      const response = await axios.get(`/rastrear?tracking=${trackingCode}`);
      const statusList = response.data.result.status_list;
      setData(statusList);

      if (statusList.length === 0) {
        setLoading(false);
        setInvalidCode(true);

      } else {
        handleUpdateSuccessfulSearchHistory(trackingCode, trackingCode);
        setApiIsDown(false)

      }
    } catch (error) {
      setApiIsDown(true);
      console.error('Erro ao acessar API', error);
    } finally {
      setLoading(false);

    }
  };



  const handleSelectedTrackingCode = async (trackingCode) => {
    setSearch(true);
    setInvalidCode(false);
    setLoading(true);
    setClearPreviousSearch(false);
    setEmptyHistory(false);

    try {
      const response = await axios.get(`/rastrear?tracking=${trackingCode}`);
      const statusList = response.data.result.status_list;
      setData(statusList);

      if (statusList.length === 0) {
        setLoading(false);
        setInvalidCode(true);

      } else {
        setApiIsDown(false)

      }
      
    } catch (error) {
      setApiIsDown(true);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateSuccessfulSearchHistory = async (trackingCode, trackingName) => {
    try {
      const updatedHistory = [...successfulSearchHistory, { trackingCode, trackingName }];
      await AsyncStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      setSuccessfulSearchHistory(updatedHistory);
      setEmptyHistory(false);
    } catch (error) {
      console.error('Error updating search history: ', error);
    }
  };

  const handleEdit = (trackingName) => {
    setSelectedTrackingCode(trackingName);
    setEditModalOpen(true);
  };

  const handleDeleteTrackingName = async (trackingName) => {
    try {
      const updatedHistory = successfulSearchHistory.filter(item => item.trackingName !== trackingName);
      await AsyncStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      setSuccessfulSearchHistory(updatedHistory);
      if (updatedHistory.length === 0) {
        setEmptyHistory(true);
      }
    } catch (error) {
      console.error('Error deleting tracking name: ', error);
    }
  };

  const handleSaveEdit = async (editedTrackingName) => {
    try {
      const updatedHistory = successfulSearchHistory.map((item) =>
        item.trackingName === selectedTrackingCode
          ? { trackingCode: item.trackingCode, trackingName: editedTrackingName }
          : item
      );
      await AsyncStorage.setItem('searchHistory', JSON.stringify(updatedHistory));
      setSuccessfulSearchHistory(updatedHistory);
    } catch (error) {
      console.error('Error saving edit: ', error);
    }
  };

  const handleNewSearch = () => {
    setClearPreviousSearch(false);
    setSearch(false);
    setLoading(false);
  };

  return (

    <ScrollView contentContainerStyle={styles.scrollViewContainer}>

      <ImageBackground
        source={{ uri: 'https://png.pngtree.com/thumb_back/fw800/background/20230624/pngtree-mail-sorting-system-3d-illustration-of-parcels-being-organized-and-sorted-image_3668517.jpg' }}
        style={styles.container}
      >
        <View style={[styles.overlay]}>

          {!editModalOpen &&
            <>
              <View style={styles.trackingContent}>

                {loading && <Text>Carregando...</Text>}

                {!search && !loading && !clearPreviousSearch &&
                  <>
                    <Text style={styles.title1}>Rastrear Encomenda</Text>
                    <TextInput
                      style={styles.input}
                      onChangeText={handleTrackingCodeChange}
                      value={trackingCode}
                      placeholder="CÓDIGO DE RASTREIO DO CORREIOS"
                      textAlign="center"
                    />
                    <TouchableOpacity style={styles.button} title="Rastrear" onPress={() => submitHandler(trackingCode)} >
                      <Text style={styles.buttonText}>Rastrear Encomenda</Text>
                    </TouchableOpacity>

                  </>

                }

                {search && !loading &&
                  <TrackingResult
                    data={data}
                    setSearch={setSearch}
                    setInvalidCode={setInvalidCode}
                  />

                }

                {search && invalidCode && !loading &&
                  <>
                    <Text style={styles.title1}>Código de Rastreio inválido</Text>

                    <TouchableOpacity style={styles.button} title="Realizar outra pesquisa" onPress={handleNewSearch} >
                      <Text style={styles.buttonText}>Realizar outra pesquisa</Text>

                    </TouchableOpacity>

                  </>
                }

                {search && apiIsDown && !loading &&
                  <>
                    <Text style={styles.title1}>API fora do ar...</Text>

                    <TouchableOpacity style={styles.button} title="Realizar outra pesquisa" onPress={handleNewSearch} >
                      <Text style={styles.buttonText}>Realizar outra pesquisa</Text>
                    </TouchableOpacity>

                  </>
                }
              </View>

              <View style={styles.trackingContent}>
                {!emptyHistory
                  ?
                  <>
                    <Text style={styles.title1}>Histórico de Busca</Text>
                    {successfulSearchHistory.map((item) => (
                      <View key={item.trackingCode}>
                        <View style={{ display: "flex", flexDirection: 'row-reverse', justifyContent: "space-between", alignItems: 'center', width: '100%' }}>

                          <TouchableOpacity onPress={() => handleDeleteTrackingName(item.trackingName)}>
                            <Text style={{ fontSize: 20, marginRight: 10 }}>X</Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={() => handleSelectedTrackingCode(item.trackingCode)}>
                            <Text style={{ fontSize: 18, flex: 1 }}>{item.trackingName}</Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={() => handleEdit(item.trackingName)}>
                            <Text style={{ fontSize: 20 }}>✎</Text>
                          </TouchableOpacity>

                        </View>
                        <View style={{ borderBottomWidth: 1, borderColor: 'black', marginBottom: 10, marginTop: 15 }} />
                      </View>
                    ))}
                  </>

                  : <Text>Histórico de busca está vazio</Text>}
              </View>
            </>
          }

          {editModalOpen &&
            <EditModal
              isOpen={editModalOpen}
              onClose={() => setEditModalOpen(false)}
              handleSaveEdit={handleSaveEdit}
              selectedTrackingCode={selectedTrackingCode}
            />
          }
        </View>


      </ImageBackground>
    </ScrollView >

  );
}

export default Main;
