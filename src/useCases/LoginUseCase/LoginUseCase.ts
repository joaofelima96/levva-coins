import { LoginParams, LoginValues } from "../../domain/login";
import { RequestError } from "../../domain/request";
import { LoginService } from "../../services/LoginServices/LoginService";
import { loadLogin, loadLoginDone, loadLoginFail } from "../../stores/LoginStore/LoginEvents";

const execute = async ({ email, password }: LoginParams): Promise<void> => {
    loadLogin();

    const errorCallBack = ({ hasError, message }: RequestError) => {
        loadLoginFail({ hasError, message });
    };

    return LoginService.authenticateUser({ email, password })
        .then((user: LoginValues) => {
            window.localStorage.setItem("user", JSON.stringify(user));

            loadLoginDone();

        }
        ).catch(errorCallBack);
};

const LoginUseCase = {
    execute,
};

export default LoginUseCase;