import { StyleSheet, Text, View, Image } from 'react-native';
import DefaultRoundedBotton from '../../../../components/DefaultRoundedBotton';
import DefaultTextInput from '../../../../components/DefaultTextInput';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../MainStackNavigator';


interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'>{};
export default function LoginScreen({ navigation, route }: Props){
    return (
        <View style={styles.container}>
              <Image 
                style={styles.imageBackgroud}
                source={ require('../../../../../assets/city.jpg') }
              />
              <View style={styles.form}>
                <Image 
                  style={styles.imageUser}
                  source={ require('../../../../../assets/user.png') }
                />
                <Text style={styles.textLogin}>LOGIN</Text>
        
                
                <DefaultTextInput 
                  icon={require('../../../../../assets/email.png')}
                  placeholder='Correo Electrónico'
                  onChangeText={text => {}}
                  value=''
                  keyboardType='email-address'
                />
        
                <DefaultTextInput 
                  icon={require('../../../../../assets/password.png')}
                  placeholder='Contraseña'
                  onChangeText={text => {}}
                  value=''
                  secureTextEntry={true}
                  
                />
        
                <DefaultRoundedBotton
                  text='Iniciar Sesion'
                  onPress={ () => {}}
                />        
                
        
               <View style={styles.containerDontHaveAccount}>
                <View style={styles.divider}></View>
                <Text style={styles.textDontHaveAccount}>¿No tienes cuenta?</Text>
                <View style={styles.divider}></View>
               </View>        
        
        
                <DefaultRoundedBotton
                  text='Registrate'
                  onPress={ () => navigation.navigate('RegisterScreen')}
                  backgroundColor='black'
                />
                 
                
              </View>
              
            </View>
    )
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