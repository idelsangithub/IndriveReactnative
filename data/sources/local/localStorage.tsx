import AsyncStorage from "@react-native-async-storage/async-storage";

export class LocalStorage {

    async save(key: string, value: string){
        try{
            await AsyncStorage.setItem(key, value); //metodo de la la libreria @react-native-async-storage/async-storage
        }catch (error){
            console.log('Error En LocalStorage: ', error);
        }

    }

    async getItem(key: string){
        try{
            const item = await AsyncStorage.getItem(key); //metodo de la la libreria @react-native-async-storage/async-storage
            return item;
        }catch (error){
            console.log('Error En LocalStorage: ', error);
        }

    }

    async remove(key: string){
        try{
            await AsyncStorage.removeItem(key); //metodo de la la libreria @react-native-async-storage/async-storage
           
        }catch (error){
            console.log('Error En LocalStorage: ', error);
        }

    }

}