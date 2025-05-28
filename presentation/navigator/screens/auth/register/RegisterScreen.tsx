import { Text, View, Image, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import styles from "./Style";
import DefaultTextInput from "../../../../components/DefaultTextInput";
import DefaultRoundedBotton from "../../../../components/DefaultRoundedBotton";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../../MainStackNavigator";
import { useState } from "react";
import EmailValidator from "../../../../utils/EmailValidator";

interface Props extends StackScreenProps<RootStackParamList, 'RegisterScreen'>{}
export default function RegisterScreen({navigation, route}: Props) {
    //Estados de las propiedades
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [telefono, setTelefono] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    //funcion para manejar los errores de las propiedades
    const handlerRegister = () => {
        //nombre
        if(name === ''){
            Alert.alert('Error', 'El campo Nombre es obligatorio');
            return;
        }

        if(lastname === ''){
            Alert.alert('Error', 'El campo Apellido es obligatorio');
            return;
        }

        if(email === ''){
            Alert.alert('Error', 'El campo nombre es obligatorio');
            return;
        }

        if(!EmailValidator(email)){
            Alert.alert('Error', 'El email no es correcto');
            return;
        }

        if(telefono === ''){
            Alert.alert('Error', 'El Teléfono es obligatorio');
            return;
        }

        if(password === ''){
            Alert.alert('Error', 'El campo Password es obligatorio');
            return;
        }

        if(confirmPassword === ''){
            Alert.alert('Error', 'El campo COnfirmar Contraseña es obligatorio');
            return;
        }

        if(password !== confirmPassword){
            Alert.alert('Error', 'Las contraseñas no coinciden');
            return;
        }

        console.log('Nombre', name);
        console.log('Apellido', lastname);
        console.log('Email', email);
        console.log('Telefono', telefono);
        console.log('Password', password);
        console.log('Confirm Password', confirmPassword);

    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps='handled'
            >
                <View style={styles.container}>
                <Image
                    source={ require('../../../../../assets/city.jpg') }
                    style={styles.imageBackground}
                />
                <View style={styles.form}>
                    <TouchableOpacity
                        onPress={() => navigation.pop()}
                    >
                        <Image
                            style={styles.back}
                        source={require('../../../../../assets/left_arrow.png')} 
                        />
                    </TouchableOpacity>
                    <Image
                        source={require('../../../../../assets/user.png')}
                        style={styles.imageUser}
                    />
                    <Text style={styles.textRegister}>REGISTRO</Text>

                    <DefaultTextInput
                        placeholder="Nombre"
                        value={name}
                        onChangeText={setName}
                        icon={require('../../../../../assets/user.png')}
                    />

                    <DefaultTextInput
                        placeholder="Apellido"
                        value={lastname}
                        onChangeText={setLastname}
                        icon={require('../../../../../assets/user_image.png')}
                    />

                    <DefaultTextInput
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        icon={require('../../../../../assets/email.png')}
                    />

                    <DefaultTextInput
                        placeholder="Teléfono"
                        value={telefono}
                        onChangeText={setTelefono}
                        keyboardType="numeric"
                        icon={require('../../../../../assets/phone.png')}
                    />

                    <DefaultTextInput
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        icon={require('../../../../../assets/password.png')}
                        secureTextEntry={true}
                    />

                    <DefaultTextInput
                        placeholder="Confirmar Password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword}
                        icon={require('../../../../../assets/password.png')}
                        secureTextEntry={true}
                    />

                    <DefaultRoundedBotton
                        text="Registrate"
                        backgroundColor="black"
                        onPress={ () => { 
                            handlerRegister();
                        }}
                    />

                    
                </View>

            </View>
            </ScrollView>
        </KeyboardAvoidingView>
        
    );
}