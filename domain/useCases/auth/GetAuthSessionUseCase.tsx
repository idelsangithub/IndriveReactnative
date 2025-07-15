import { AuthResponse } from "../../models/AuthResponse";
import { ErrorResponse } from "../../models/ErrorResponse";
import { AuthRepository } from "../../repository/AuthRepository";

export class GetAuthSessionUseCase {

    private authRepository: AuthRepository;

    constructor({authRepository}:{authRepository: AuthRepository}){
        this.authRepository = authRepository;
    }

    //funcio que ejecutara

    async execute(): Promise<void>{

         await this.authRepository.getAuthSession();
    }
}