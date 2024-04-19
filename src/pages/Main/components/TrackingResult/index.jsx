import { Text, View, TouchableOpacity, Modal } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import mainStyles from '../../../../../styles';


function TrackingResult({ data, setSearch, setInvalidCode }) {

    const formatDate = dateString => new Date(dateString).toLocaleDateString(undefined, { year: 'numeric', month: '2-digit', day: '2-digit' });

    if (!data || !data.length) return null;

    const uniqueKeys = new Set();

    return (
        <View style={mainStyles.flexCenterColumn}>
            <Text style={mainStyles.title1}>Dados de Rastreio</Text>
            <View style={styles.result}>
                {data.map(({ data, origem, local, status, id }) => {
                    if (uniqueKeys.has(status)) return null;
                    uniqueKeys.add(status);
                    return (
                        <View key={id} style={styles.resultItem}>
                            {data && <Text><Text style={styles.bold}>Data:</Text> {formatDate(data)}</Text>}
                            {origem && <Text><Text style={styles.bold}>Origem:</Text> {origem}</Text>}
                            {local && <Text><Text style={styles.bold}>Local:</Text> {local}</Text>}
                            {status && <Text><Text style={styles.bold}>Status:</Text> {status}</Text>}
                        </View>
                    );
                })}

            </View>
            <TouchableOpacity title="Realizar outra pesquisa" style={mainStyles.button} onPress={() => { setSearch(false); setInvalidCode(false) }} >
                <Text style={mainStyles.buttonText}>Realizar outra pesquisa</Text>
            </TouchableOpacity>

        </View>
    );
}

TrackingResult.propTypes = {
    data: PropTypes.array.isRequired,
    setSearch: PropTypes.func.isRequired,
    setInvalidCode: PropTypes.func.isRequired
};

export default TrackingResult;
