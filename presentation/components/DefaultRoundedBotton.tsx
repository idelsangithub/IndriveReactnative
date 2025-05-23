import { StyleSheet, Text, TouchableOpacity } from "react-native"

interface Props {
    text: string, //propiedad obligatori
    onPress: () => void, //propiedad obligatori
    backgroundColor?: string // con el signo ? es opcional la propiedad
}

const DefaultRoundedBotton = ({text, onPress, backgroundColor}: Props) => {
    return (
        <TouchableOpacity 
        style={[styles.roundedBotton, {backgroundColor: backgroundColor || 'red'}]}
        onPress={ () => onPress()}
        >
            <Text style={styles.textBotton}>{ text }</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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
})

export default DefaultRoundedBotton;
