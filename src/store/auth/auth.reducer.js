import { updateValue } from "../../utils/localStorage";
import { USER_LOGIN_ERROR, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from "./auth.actionType";
import { initalState } from "./auth.constants";

export const authReducer = (state = initalState, {type, payload }) => {
    switch(type){
        case USER_LOGIN_REQUEST: {
            return {...state, 
                    isLoading: true,
                    error: false,
            };
        }

        case USER_LOGIN_SUCCESS: {
            updateValue("userToken", payload.userToken);
            return {...state, 
                    isUserLoggedIn: true,
                    isLoading: false,
                    error: false,
                    ...payload,
            };
        }

        case USER_LOGIN_ERROR: {
            updateValue("userToken", payload.userToken);
            return {...state,
                    isUserLoggedIn: false,
                    isLoading: false,
                    error: true,
            };
        }
        case USER_LOGOUT: {
            updateValue("userToken", "")
            return {...state, 
                    isUserLoggedIn: false,
                    userToken: "",
            };
        }
        default: {
            return state;
        }
    }
}