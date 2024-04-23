import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title1: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 20,

  },
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

});

export default styles;
