import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.imageBackgroud}
        source={ require('./assets/city.jpg') }
      />
      <View style={styles.form}>
        <Image 
          style={styles.imageUser}
          source={ require('./assets/user.png') }
        />
        <Text style={styles.textLogin}>LOGIN</Text>

        <View style={styles.containerTextInput}>
          <Image 
            style={styles.textInputIcon}
            source={ require('./assets/email.png') }
          />
          <TextInput 
            style={styles.textInput}
            placeholder='Correo electrónico'
            placeholderTextColor='white'
          />
        </View>
        <View style={styles.containerTextInput}>
          <Image 
            style={styles.textInputIcon}
            source={ require('./assets/password.png') }
          />
          <TextInput 
            style={styles.textInput}
            placeholder='Contraseña'
            placeholderTextColor='white'
          />
        </View>
        
        <TouchableOpacity style={styles.roundedBotton}>
          <Text style={styles.textBotton}>Iniciar Sesion</Text>
        </TouchableOpacity>

       <View style={styles.containerDontHaveAccount}>
        <View style={styles.divider}></View>
        <Text style={styles.textDontHaveAccount}>¿No tienes cuenta?</Text>
        <View style={styles.divider}></View>
       </View>
        


        <TouchableOpacity style={styles.roundedBotton}>
          <Text style={styles.textBotton}>Registrate</Text>
        </TouchableOpacity>
         
        
      </View>
      
    </View>
  );
}

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
  containerTextInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10
  },  
  textInput: {
    width: '90%',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    color: 'white',
    fontSize: 18,
    
  },
  textInputIcon: {
    width: 25,
    height: 25,
    marginRight: 15
  },
  textDontHaveAccount: {
    color: 'white'
  },
  roundedBotton:{
    width: '100%',
    height: 55,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginTop: 25

  },
  textBotton:{
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
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
