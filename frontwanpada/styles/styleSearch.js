import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 30,
  },
  containerImage: {
    borderRadius: 30,
    height: 60,
    width: 60,
    marginLeft:10,
    marginTop:10,
    marginRight: 20
  },
  card: {
    backgroundColor: 'white',
    height: 150,
    width: 350,
    marginRight: 'auto',
    marginLeft: 'auto',
    marginBottom: 20,
    borderRadius: 10
  },
  title_profile: {
    flexDirection: 'column',
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:15,
    fontSize: 20,
    color: '#00A6FB',
    fontWeight: 'bold',
  },
  fontTitle: {
    fontSize: 20,
    color: '#00A6FB',
    fontWeight: 'bold',
    textAlign: 'left'
  },
  dist_profile: {
    marginTop: 15,
    color: '#00A6FB',
    fontWeight: 'bold'
  },
  iconLike: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginBottom: 6
  },
  text_profile:{
    fontSize: 12,
    margin: 'auto',
    color: '#fff',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
});
