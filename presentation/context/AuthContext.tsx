import { createContext, useEffect, useState } from "react";
import { AuthResponse } from "../../domain/models/AuthResponse";
import { LocalStorage } from "../../data/sources/local/localStorage";

export interface AuthContextProps {

    authResponse: AuthResponse | null,
    saveAuthSession: (authResponse: AuthResponse) => Promise<void>; //metodos necesarios para ser utilizado en el manejo de la sesion
    getAuthSession: () => Promise<void>;
    removeAuthSession: () => Promise<void>;

}

export const AuthContext = createContext( {} as AuthContextProps); //castiar el objeto al nombre de la interfacer realizada anterior

//constaste que sirve para proveedor de información el que implemnta las propiedas descrita anteriormente
export const AuthProvider = ({children}: any) => {
    const localStorage = new LocalStorage(); //instaciamos la clase para implementar lo metodos o funcionmes
    const [authResponse, setAuthResponse] = useState<AuthResponse | null>(null); // al principio va null ya que no se posee informacion
    
    useEffect(() => {
      getAuthSession();
    }, []);
    


    //realizar las funciones que se tienen definidas en las propiedades
    const saveAuthSession = async (authResponse: AuthResponse) => { //guarda la info en session npm i @react-native-async-storage/async-storage
        localStorage.save("auth", JSON.stringify(authResponse));
        setAuthResponse(authResponse);
    }

    const getAuthSession = async () => {

        const data = await localStorage.getItem('auth');
        const authData: AuthResponse = JSON.parse(data as any);
        console.log('Session Data: ', authData);
        setAuthResponse(authData);

    }

    const removeAuthSession = async () => {

    }

    return (
        <AuthContext.Provider value={{ 
            authResponse,
            saveAuthSession,
            getAuthSession,
            removeAuthSession
         }}>
            {children}
         </AuthContext.Provider>


    )


}