import { Text, View, Image, Alert } from 'react-native';
import DefaultRoundedBotton from '../../../../components/DefaultRoundedBotton';
import DefaultTextInput from '../../../../components/DefaultTextInput';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../../MainStackNavigator';
import styles from './Styles';
import { useState } from 'react';
import EmailValidator from '../../../../utils/EmailValidator';




interface Props extends StackScreenProps<RootStackParamList, 'LoginScreen'>{};
export default function LoginScreen({ navigation, route }: Props){
    // estados de las propiedades
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
      if(email === '' || password === ''){
        Alert.alert('Error', 'El email y el password no pueden estar vacios')
        return;
      }

      if(!EmailValidator(email)){
        Alert.alert('Error', 'El email no es válido')
        return;
      }

      console.log(email);
      console.log(password);
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

