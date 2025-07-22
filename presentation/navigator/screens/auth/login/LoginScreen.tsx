import { Text, View, Image, Alert } from 'react-native';
import DefaultRoundedBotton from '../../../../components/DefaultRoundedBotton';
import DefaultTextInput from '../../../../components/DefaultTextInput';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../MainStackNavigator';
import styles from './Styles';
import { useEffect, useState } from 'react';
import EmailValidator from '../../../../utils/EmailValidator';
import { container } from '../../../../../di/container'
import { useAuth } from '../../../../hooks/useAuth';
import { AuthResponse } from '../../../../../domain/models/AuthResponse';
import { ErrorResponse } from '../../../../../domain/models/ErrorResponse';




interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'>{};
export default function LoginScreen({ navigation, route }: Props){
    // estados de las propiedades
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //arquitectura 
    
    const loginVieModel = container.resolve('loginViewModel');

    const { authResponse, saveAuthSession } = useAuth();

    useEffect(() => {
      if(authResponse !== null && authResponse !== undefined){
          if(authResponse.user.roles!.length > 1){
            navigation.replace('RolesScreen')
          }else{
            //por defecto la pantalla de cliente
            navigation.replace('ClientHomeScreen');
          }
      }
      
    }, [authResponse])
    

    const handleLogin = async () => {
      if(email === '' || password === ''){
        Alert.alert('Error', 'El email y el password no pueden estar vacios')
        return;
      }

      if(!EmailValidator(email)){
        Alert.alert('Error', 'El email no es válido')
        return;
      }

      const response  = await loginVieModel.login(email, password);

      if('token' in response){ //login exitoso
        saveAuthSession(response);       
        
        console.log('RESPONSE login exitoso');

      }
      console.log('RESPONSE', response);
      
      //await login(email, password);     

      
    }

    


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
                  onChangeText={setEmail}
                  value={email}
                  keyboardType='email-address'
                />
        
                <DefaultTextInput 
                  icon={require('../../../../../assets/password.png')}
                  placeholder='Contraseña'
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry={true}
                  
                />
        
                <DefaultRoundedBotton
                  text='Iniciar Sesion'
                  onPress={ () => { 
                    handleLogin();
                  }}
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

