import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
  imageBackgroud: {
    width: '100%',
    height: '100%',
    opacity: 0.7,
    marginBottom: 15

  },
  form: {
    width: '87%',
    height: '80%',
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 40,
    justifyContent: 'center',
    paddingHorizontal: 25,
    
  },
  imageUser: {
    width: 150,
    height: 150,
    alignSelf: 'center'

  },
  textLogin: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
    
  
  textDontHaveAccount: {
    color: 'white'
  },
  
  
  containerDontHaveAccount: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 15
  },
  divider: {
    height: 1,
    width: 68,
    backgroundColor: 'white',
    marginHorizontal: 5
  }

});

export default styles;