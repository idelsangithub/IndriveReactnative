import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        width: 150,
        height: 150,
        borderRadius: 50,
        objectFit: 'cover'
    },
    textItem: {
        alignSelf: 'center',
        fontSize: 22,
        marginBottom: 15
    }
});


export default styles;