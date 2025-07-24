import { Platform, Text, View } from "react-native";
import styles from "./Styles";
import { useEffect, useState } from "react";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from 'expo-location'; 

export default function ClientSearchMapScreen(){

    const [location, setLocation] = useState<Region | undefined>(undefined); //se indica que el valor inicial es undefined

    useEffect(() => {  //permite que este codigo se ejecute solo una vez.
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if(status !== 'granted'){
            console.log('Permisos de ubicacion denegado');
            return;
        }

        if(Platform.OS === 'android'){
            const { status: backGroundStatus } = await Location.requestBackgroundPermissionsAsync();
            if(backGroundStatus !== 'granted'){
                console.log('Permiso de ubicacion en segundo plano denegado')
            }
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922, 
            longitudeDelta: 0.0421
        });

      })();
    }, [])
    
    if(!location){
        return <View style={styles.container}><Text>No se puede obtener la ubicacion</Text></View>;
    }
    return(
        <View style={styles.container}>
            <MapView style={ styles.map } initialRegion={location}>
                <Marker coordinate={{ 
                    latitude: location!.latitude, // se le coloca ! 
                    longitude: location!.longitude
                 }} title="Mi ubicación"/>
            </MapView>
        </View>
    );
}