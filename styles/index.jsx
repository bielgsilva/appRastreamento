import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  '@import url': {
    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '100',
    src: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;700&display=swap',
  },

  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Montserrat',
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  container: {

    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.548)',
    paddingVertical: '5%',
    paddingHorizontal: '5%',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexCenterColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    gap: 20,
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 8,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    width: '100%',
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    fontSize: 15,
    justifyContent: 'center',
    elevation: 3,
    color: "black",
    marginBottom:15
  },
  buttonText: {
       fontSize: 15,
       textAlign:"center"
  },
  title1: {
    fontSize: 18,
    lineHeight: 26,
    textAlign: 'center',
    fontWeight: 'bold',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  buttonHover: {
    backgroundColor: '#019136',
  },
  icon: {
    marginRight: 5,
  },
  bodyModalOpen: {
    overflow: 'hidden',
  },
});

export default styles;
