import { StyleSheet, Image, TextInput, View, KeyboardType } from "react-native"

interface Props {
    placeholder: string,
    value: string,
    onChangeText: (text: string) => void,
    keyboardType?: KeyboardType,
    icon: any,  // al pasar ruta se coloca tipo any
    secureTextEntry?: boolean

}

const DefaultTextInput = ({
    placeholder, 
    value, 
    onChangeText, 
    keyboardType = 'default', 
    icon,
    secureTextEntry = false
}: Props) => {
    return (
        <View style={styles.containerTextInput}>
            <Image 
            style={styles.textInputIcon}
            source={ icon }
            />
            <TextInput 
            style={styles.textInput}
            placeholder={placeholder}
            placeholderTextColor='white'
            value={value}
            onChangeText={ text => onChangeText(text)}
            keyboardType={ keyboardType }
            secureTextEntry={ secureTextEntry }
            />
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default DefaultTextInput;