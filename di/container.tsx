import { asClass, createContainer } from "awilix";
import { AuthService } from "../data/sources/remote/services/AuthService";
import { AuthRespositoryImpl } from "../data/repository/AuthrepositoryImpl";
import { LoginUseCase } from "../domain/useCases/auth/LoginUseCase";
import { LoginViewModel } from "../presentation/navigator/screens/auth/login/loginViewModel";
import { RegisterViewModel } from "../presentation/navigator/screens/auth/register/RegisterViewModel";
import { RegisterUseCase } from "../domain/useCases/auth/RegisterUseCase";
import { LocalStorage } from "../data/sources/local/localStorage";
import { SaveAuthSessionUseCase } from "../domain/useCases/auth/SaveAuthSessionUseCase";
import { GetAuthSessionUseCase } from "../domain/useCases/auth/GetAuthSessionUseCase";
import { RemoveAuthSessionUseCase } from "../domain/useCases/auth/RemoveAuthSessionUseCase";
import { AuthUseCases } from "../domain/useCases/auth/AuthUseCases";

const container = createContainer(); 

container.register({
    //SERVICES
    authService: asClass(AuthService).singleton(),
    localStorage: asClass(LocalStorage).singleton(),
    //REPOSITORY
    authRepository: asClass(AuthRespositoryImpl).singleton(),
    //USE CASES
    loginUseCase: asClass(LoginUseCase).singleton(),
    registerUseCase: asClass(RegisterUseCase).singleton(),
    saveAuthSessionUseCase: asClass(SaveAuthSessionUseCase).singleton(),
    getAuthSessionUseCase: asClass(GetAuthSessionUseCase).singleton(),
    removeAuthSessionUseCase: asClass(RemoveAuthSessionUseCase).singleton(),
    authUseCases: asClass(AuthUseCases).singleton(),

    //VIEW MODEL
    loginViewModel: asClass(LoginViewModel).singleton(),
    registerVIewModel: asClass(RegisterViewModel).singleton(),
   

});

export { container };