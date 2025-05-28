import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        opacity: 0.6

    },
    form: {
        width: '87%',
        height: '78%',
        position: 'absolute',
        backgroundColor: 'rgba(255, 255, 255, 0.4)',
        borderRadius: 40,
        justifyContent: 'center',
        paddingHorizontal: 25
    },
    imageUser: {
        width: 140,
        height: 140,
        alignSelf: 'center'
    },
    textRegister: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    back: {
        width: 30,
        position: 'absolute',
        height: 20,
        top: 20,
        left: 5
    }
});

export default styles;