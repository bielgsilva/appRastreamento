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
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 0.1,
    borderColor: 'black',

    elevation: 5,
  },
  buttonText: {
    color: '#FFFFFF', 
    fontSize: 15, 
    fontWeight: 'bold',
    textTransform:"uppercase",
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
  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  trackingContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    height: "auto",
    padding: 40,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 0, 0.85)',
  },
  trackingNames: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  listItem: {
    listStyle: 'none',
  },
  icon: {
    fontSize: 20,
  },
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: 'black',
  }
});

export default styles;
