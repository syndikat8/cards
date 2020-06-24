import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import loginReducer from "./loginReducer";
import registrationReducer from "./registrationReducer";
import passwordRecoveryReducer from "./passwordRecoveryReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    passwordRecovery:passwordRecoveryReducer,
    profile: profileReducer

})

export type AppStateType = ReturnType<typeof rootReducer>
export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store