import { AuthResponse } from "../../domain/models/AuthResponse";
import { ErrorResponse } from "../../domain/models/ErrorResponse";
import { User } from "../../domain/models/User";
import { AuthRepository } from "../../domain/repository/AuthRepository";
import { AuthService } from "../sources/remote/services/AuthService";

export class AuthRespositoryImpl implements AuthRepository {

    private authService: AuthService;

    constructor({authService}: {authService: AuthService}){
        this.authService = authService;
    }
    async register(user: User): Promise<AuthResponse | ErrorResponse> {
        return await this.authService.register(user);
    }

    async login(email: string, password: string): Promise<AuthResponse | ErrorResponse> {
         return await this.authService.login(email, password);
    }

}