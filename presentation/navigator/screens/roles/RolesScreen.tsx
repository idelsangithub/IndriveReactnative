import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../MainStackNavigator";
import { FlatList, Text, View } from "react-native";
import { useAuth } from "../../../hooks/useAuth";
import styles from "./Styles";
import RolesItem from "./RolesItem";

interface Props extends StackScreenProps<RootStackParamList, 'RolesScreen'>{};


//recibe el objeto navigation que permite pasar a otras pantallas, y route permite pasar parametros
export default function RolesScreen({navigation, route}: Props){
    
    const { authResponse } = useAuth();
    
    return(
        <View style={ styles.container}>
            <FlatList
                contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
                data={ authResponse?.user.roles}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <RolesItem role={item} navigation={navigation} /> }
            />
        </View>
    );
}