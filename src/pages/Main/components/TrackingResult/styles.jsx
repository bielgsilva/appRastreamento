import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  trackingResult: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25,
  },
  result: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginVertical: 30,
    fontSize: 16,
  },
  resultItem: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.144)',
    marginVertical: 5,
  },
  whatsappButton: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  boxNumberWhatsapp: {
    width: '100%',
    marginTop: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  inputWhatsapp: {
    width: '100%',
    padding: 5,
  },
  attButton: {
    backgroundColor: 'rgb(0, 0, 0)',
  },
  // You can add your media queries inline if necessary
  '@media (max-width: 768px)': {
    result: {
      fontSize: 12,
    },
    // Add additional styles for smaller screens here
  },
});

export default styles;
