import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({

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
