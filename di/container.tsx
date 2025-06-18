import { asClass, createContainer } from "awilix";
import { AuthService } from "../data/sources/remote/services/AuthService";
import { AuthRespositoryImpl } from "../data/repository/AuthrepositoryImpl";
import { LoginUseCase } from "../domain/useCases/auth/LoginUseCase";
import { LoginViewModel } from "../presentation/navigator/screens/auth/login/loginViewModel";

const container = createContainer(); 

container.register({
    authService: asClass(AuthService).singleton(),
    authRepository: asClass(AuthRespositoryImpl).singleton(),
    loginUseCase: asClass(LoginUseCase).singleton(),
    loginViewModel: asClass(LoginViewModel).singleton(),

});

export { container };