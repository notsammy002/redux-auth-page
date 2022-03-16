import { getValue } from "../../utils/localStorage";

export const initalState = {
        isUserLoggedIn: getValue("userToken") ? true :false,
        userToken: getValue("userToken"),

        isLoading: false,
        error: false,
}