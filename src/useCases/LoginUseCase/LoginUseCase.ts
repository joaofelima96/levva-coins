import { LoginParams, LoginValues } from "../../domain/login";
import { RequestError } from "../../domain/request";
import { LoginService } from "../../services/LoginServices/LoginService";

const execute = async ({ email, password }: LoginParams): Promise<void> => {
    const errorCallBack = ({ hasError, message }: RequestError) => {
        //fazer algo com o erro
    };

    return LoginService.authenticateUser({ email, password })
        .then((user: LoginValues) => {
            window.localStorage.setItem("user", JSON.stringify(user));


        })
}

const LoginUseCase = {
    execute,
};

export default LoginUseCase;