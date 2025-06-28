import { asClass, createContainer } from "awilix";
import { AuthService } from "../data/sources/remote/services/AuthService";
import { AuthRespositoryImpl } from "../data/repository/AuthrepositoryImpl";
import { LoginUseCase } from "../domain/useCases/auth/LoginUseCase";
import { LoginViewModel } from "../presentation/navigator/screens/auth/login/loginViewModel";
import { RegisterViewModel } from "../presentation/navigator/screens/auth/register/RegisterViewModel";
import { RegisterUseCase } from "../domain/useCases/auth/RegisterUseCase";

const container = createContainer(); 

container.register({
    //SERVICES
    authService: asClass(AuthService).singleton(),
    //REPOSITORY
    authRepository: asClass(AuthRespositoryImpl).singleton(),
    //USE CASES
    loginUseCase: asClass(LoginUseCase).singleton(),
    registerUseCase: asClass(RegisterUseCase).singleton(),
    //VIEW MODEL
    loginViewModel: asClass(LoginViewModel).singleton(),
    registerVIewModel: asClass(RegisterViewModel).singleton(),
   

});

export { container };